/* eslint-disable @typescript-eslint/no-magic-numbers -- config file */
/* eslint-disable @typescript-eslint/naming-convention -- this is a config file */
import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import { globalIgnores } from "eslint/config";
import love from "eslint-config-love";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  globalIgnores(["./next-env.d.ts"]),
  ...compat.config({
    globals: {
      graphql: true,
      document: true,
      window: true,
      IntersectionObserver: true,
      Sentry: true,
      JSX: true,
    },
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  }),
  love,
  stylistic.configs.recommended,
  {
    plugins: {
      "@stylistic": stylistic,
      "@unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/max-len": [
        1,
        {
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          code: 100,
          tabWidth: 1,
        },
      ],
      "@stylistic/explicit-function-return-type": "off",
      "@stylistic/no-tabs": "off",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/comma-dangle": [
        "error",
        {
          objects: "always-multiline",
          arrays: "always-multiline",
        },
      ],
      "@stylistic/no-extra-semi": "error",
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];

export default eslintConfig;
