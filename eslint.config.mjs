import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import cspellESLintPluginRecommended from '@cspell/eslint-plugin/recommended';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
    cspellESLintPluginRecommended,
]);
"rules": {
  "semi": "error",
  "prefer-const": "error",
  "no-console": "off",
  "no-unused-vars": "warn",
  "no-var": "error",
  "indent": "error",
  "no-multi-spaces": "error",
  "space-in-parens": "error",
  "no-multiple-empty-lines": "error",
  "prefer-const": "error",
  "no-use-before-define": "error"
  "quotes": [
      "error",
      "double"
   ],
      // force space after comments
  'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
  ],
        // prefer template strings over string appends
    'prefer-template': 'error',
    
  "@typescript-eslint/return-await": "error",
  '@cspell/spellchecker': [
  'warn',
  {
    checkComments: true,
    checkStringTemplates: true,
    checkStrings: true,
    numSuggestions: 3,
    checkIdentifiers: true,
    autoFix: false,
   /* customWordListFile: './spelling.txt',*/
  },
],
}