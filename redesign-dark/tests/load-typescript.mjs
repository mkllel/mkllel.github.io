import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';

export function loadTypeScript(url, overrides = {}) {
  const require = createRequire(url);
  const { outputText } = ts.transpileModule(readFileSync(url, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  });
  const exports = {};
  // Keep SDK inputs in the same JS realm so Firestore recognizes plain objects.
  const evaluate = vm.compileFunction(outputText, ['exports', 'require']);
  evaluate(exports, (name) => {
    if (Object.hasOwn(overrides, name)) return overrides[name];
    if (name.startsWith('.')) {
      const source = new URL(`${name}.ts`, url);
      return loadTypeScript(existsSync(source) ? source : new URL(`${name}.tsx`, url), overrides);
    }
    return require(name);
  });
  return exports;
}
