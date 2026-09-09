"""Split fonts without removing any supported Unicode characters."""
import argparse
import hashlib
import io
import json
import re
from pathlib import Path
from urllib.request import Request, urlopen

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/fonts/subsets"
parser = argparse.ArgumentParser()
parser.add_argument("--project-id", help="Optionally include current public project text")
args = parser.parse_args()

common = set(range(32, 127))
for path in (ROOT / "src").rglob("*.tsx"):
    common.update(map(ord, path.read_text()))
if args.project_id:
    query = {"structuredQuery": {
        "from": [{"collectionId": "portfolioProjects"}],
        "where": {"fieldFilter": {"field": {"fieldPath": "isPrivate"},
                                   "op": "EQUAL", "value": {"booleanValue": False}}},
    }}
    request = Request(
        f"https://firestore.googleapis.com/v1/projects/{args.project_id}/databases/(default)/documents:runQuery",
        data=json.dumps(query).encode(), headers={"Content-Type": "application/json"})
    with urlopen(request, timeout=60) as response:
        documents = json.load(response)

    def collect(value):
        if isinstance(value, dict):
            for key, item in value.items():
                if key == "stringValue":
                    common.update(map(ord, item))
                else:
                    collect(item)
        elif isinstance(value, list):
            for item in value:
                collect(item)

    collect(documents)


def ranges(points):
    groups = []
    for point in sorted(points):
        if groups and point == groups[-1][1] + 1:
            groups[-1][1] = point
        else:
            groups.append([point, point])
    return ",".join(f"U+{a:X}" if a == b else f"U+{a:X}-{b:X}" for a, b in groups)


def parse_ranges(value):
    result = set()
    for part in value.split(","):
        bounds = part.strip()[2:].split("-")
        start, end = int(bounds[0], 16), int(bounds[-1], 16)
        result.update(range(start, end + 1))
    return result


OUT.mkdir(parents=True, exist_ok=True)
css = ["/* Generated with fontTools. Keep source fonts and their copyright metadata. */"]
total_common = 0
generated = set()


def emit(source, family, weight, allowed=None, chunk_remaining=False):
    global total_common
    original = source.read_bytes()
    cmap = set(TTFont(io.BytesIO(original)).getBestCmap())
    supported = cmap if allowed is None else cmap & allowed
    frequent, remaining = supported & common, supported - common
    groups = [frequent]
    if chunk_remaining:
        groups.extend({c for c in remaining if c // 1024 == block}
                      for block in sorted({c // 1024 for c in remaining}))
    else:
        groups.append(remaining)
    coverage = set()
    for points in filter(None, groups):
        assert not coverage & points
        coverage.update(points)
        font = TTFont(io.BytesIO(original))
        options = subset.Options()
        options.flavor = "woff2"
        options.recalc_timestamp = False
        options.name_IDs = ["*"]
        options.name_legacy = True
        options.name_languages = ["*"]
        subsetter = subset.Subsetter(options=options)
        subsetter.populate(unicodes=points)
        subsetter.subset(font)
        buffer = io.BytesIO()
        font.save(buffer)
        data = buffer.getvalue()
        assert set(TTFont(io.BytesIO(data)).getBestCmap()) == points
        name = f"{source.stem}-{hashlib.sha256(data).hexdigest()[:12]}.woff2"
        (OUT / name).write_bytes(data)
        generated.add(name)
        if points == frequent:
            total_common += len(data)
        css.append(f"@font-face {{\n  font-family: '{family}';\n  font-style: normal;\n"
                   f"  font-weight: {weight};\n  font-display: swap;\n"
                   f"  src: url('/fonts/subsets/{name}') format('woff2');\n"
                   f"  unicode-range: {ranges(points)};\n}}")
    assert coverage == supported


for name, weight in [("Bold", 700), ("ExtraBold", 800)]:
    emit(ROOT / f"public/fonts/NanumSquare-{name}.woff2", "NanumSquare", weight,
         chunk_remaining=True)

pretendard = (ROOT / "src/pretendard-subset.css").read_text()
for block in re.findall(r"@font-face\s*\{([^}]+)\}", pretendard):
    source = re.search(r"url\(([^)]+)\)", block).group(1)
    allowed = parse_ranges(re.search(r"unicode-range:\s*([^;]+)", block).group(1))
    emit(ROOT / f"public{source}", "Pretendard", "45 920", allowed)

(ROOT / "src/font-subsets.css").write_text("\n\n".join(css) + "\n")
print(json.dumps({"files": len(generated), "commonBytesAllWeights": total_common,
                  "coverage": "All source characters preserved; no overlapping ranges per face"}))
