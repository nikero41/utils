import eslint from "@eslint/js";
import json from "@eslint/json";
import prettier from "eslint-config-prettier";
import { importX } from "eslint-plugin-import-x";
import importZod from "eslint-plugin-import-zod";
import turbo from "eslint-plugin-turbo";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
	globalIgnores(["node_modules"]),
	{
		name: "Main options",
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		settings: {
			"import-x/resolver": {
				node: {
					extensions: [
						".js",
						".mjs",
						".cjs",
						".ts",
						".mts",
						".cts",
						".tsx",
						".jsx",
					],
				},
				typescript: true,
			},
		},
		linterOptions: { reportUnusedDisableDirectives: true },
	},
	{ name: "ESlint recommended rules", ...eslint.configs.recommended },
	{
		name: "ESlint rules",
		rules: {
			/* Enforce camelCase */
			camelcase: ["error", { allow: ["required_error"] }],
			/* We allow console for debug and error reporting */
			"no-console": "error",
			/* Allow void for async functions */
			"no-void": ["error", { allowAsStatement: true }],
			/* Disabled this rule since it doesn't allow re-exporting default from index files */
			"no-restricted-exports": "off",
			/* Restrict function syntax */
			"func-style": ["error", "declaration", { allowArrowFunctions: true }],
			/* Make sure that errors are always re-referenced */
			"preserve-caught-error": "error",
			/* Restrict function syntax in objects */
			"object-shorthand": "error",
			/* Restrict callbacks to arrow functions */
			"prefer-arrow-callback": "warn",
			/* Make arrow functions omit braces if not needed */
			"arrow-body-style": ["warn", "as-needed"],
			/* Make sure there are no spaces before and after comments */
			"spaced-comment": ["error", "always", { markers: ["/", "!", "?"] }],
		},
	},
	{
		name: "Import",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		extends: [importX.flatConfigs.recommended],
		rules: {
			/* TODO: Prevent cyclic imports */
			// "import/no-cycle": "error",
			/* Allow default export of anonymous objects */
			"import-x/no-anonymous-default-export": [
				"error",
				{ allowObject: true, allowArray: true },
			],
			/* Allow default naming be the same as exported variables */
			"import-x/no-named-as-default": "off",
		},
	},
	{
		files: ["**/*.json"],
		language: "json/json",
		plugins: { json },
		extends: ["json/recommended"],
		rules: { "no-irregular-whitespace": "off" },
	},
	{
		files: ["**/*.jsonc", ".vscode/*.json"],
		language: "json/jsonc",
		plugins: { json },
		extends: ["json/recommended"],
		rules: { "no-irregular-whitespace": "off" },
	},
	{ name: "Zod", extends: importZod.configs.recommended },
	turbo.configs["flat/recommended"],
	{ name: "Prettier", ...prettier },
);
