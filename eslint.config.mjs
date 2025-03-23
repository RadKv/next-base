/* eslint-disable @typescript-eslint/no-magic-numbers -- config file */
/* eslint-disable @typescript-eslint/naming-convention -- this is a config file */
import { FlatCompat } from "@eslint/eslintrc";
import love from "eslint-config-love";
import { dirname } from "path";
import { fileURLToPath } from "url";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	{
		...love,
	},
	...compat.config({
		extends: ["next/core-web-vitals", "next/typescript", "plugin:@next/next/recommended", "prettier"],
		plugins: ["unused-imports", "simple-import-sort"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "off",
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
			"unused-imports/no-unused-imports": "error",
		},
		globals: {
			"graphql": true,
			"document": true,
			"window": true,
			"IntersectionObserver": true,
			"Sentry": true,
			"JSX": true		
		}
	}),
	stylistic.configs.recommended,
	{
		plugins: {
			"@stylistic":stylistic,
		},
		rules: {
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
			"@stylistic/comma-dangle": ["error", {
				"objects": "always-multiline",
				"arrays": "always-multiline",
			}],
			"@stylistic/no-extra-semi": "error",
			"@stylistic/semi-style": ["error", "last"],
			"@stylistic/brace-style": ["error", "1tbs"],
		},
	},
];

export default eslintConfig;
