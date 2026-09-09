"""Verify full character coverage and unchanged advance widths after subsetting."""
import re
from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]


def points(value):
    result = set()
    for part in value.split(','):
        bounds = part.strip()[2:].split('-')
        result.update(range(int(bounds[0], 16), int(bounds[-1], 16) + 1))
    return result


def font_metrics(path, allowed=None):
    font = TTFont(path)
    return {point: font['hmtx'][glyph][0] for point, glyph in font.getBestCmap().items()
            if allowed is None or point in allowed}


expected = {}
for name, weight in [('Bold', '700'), ('ExtraBold', '800')]:
    expected[('NanumSquare', weight)] = font_metrics(ROOT / f'public/fonts/NanumSquare-{name}.woff2')
expected[('Pretendard', '45 920')] = {}
for block in re.findall(r'@font-face\s*\{([^}]+)\}', (ROOT / 'src/pretendard-subset.css').read_text()):
    path = re.search(r'url\(([^)]+)\)', block).group(1)
    allowed = points(re.search(r'unicode-range:\s*([^;]+)', block).group(1))
    expected[('Pretendard', '45 920')].update(font_metrics(ROOT / f'public{path}', allowed))

actual = {key: {} for key in expected}
for block in re.findall(r'@font-face\s*\{([^}]+)\}', (ROOT / 'src/font-subsets.css').read_text()):
    family = re.search(r"font-family:\s*'([^']+)'", block).group(1)
    weight = re.search(r'font-weight:\s*([^;]+)', block).group(1)
    path = re.search(r"url\('([^']+)'\)", block).group(1)
    allowed = points(re.search(r'unicode-range:\s*([^;]+)', block).group(1))
    metrics = font_metrics(ROOT / f'public{path}')
    assert set(metrics) == allowed, path
    target = actual[(family, weight)]
    assert not set(target) & allowed, f'Overlapping ranges: {path}'
    target.update(metrics)

assert actual == expected, 'Character coverage or advance widths changed'
print('PASS: all characters and advance widths preserved for both families and weights')
