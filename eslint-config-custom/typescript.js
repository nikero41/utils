import prettier from "eslint-config-prettier";
import { importX } from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	{
		name: "Parser options for Typescript",
		languageOptions: {
			parserOptions: {
				projectService: {
					loadTypeScriptPlugins: true,
					allowDefaultProject: [
						"lint-staged.config.ts",
						"prisma.config.ts",
						"build.ts",
					],
				},
			},
		},
	},
	{
		name: "Typescript ESlint rules",
		files: ["**/*.{ts,tsx,mts,cts}"],
		extends: [tseslint.configs.strictTypeChecked],
		rules: {
			/* Allow hoisting for functions for better code readability */
			"@typescript-eslint/no-use-before-define": "off",
			/* This rule is too restrictive */
			"@typescript-eslint/return-await": "off",
			/* There are several cases that we need to use a promise as a callback */
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false,
						arguments: false,
						properties: false,
					},
				},
			],
			/* Allow classes as function groups */
			"@typescript-eslint/no-extraneous-class": "off",
			/* Allows arrow function shorthand */
			"@typescript-eslint/no-confusing-void-expression": "off",
			/* Disable unused-vars error when need to omit a field from object, { omittedField, ...params } = obj */
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ ignoreRestSiblings: true },
			],
			/* Require only objects to convert to string */
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					allow: [{ name: ["Error", "URL", "URLSearchParams"], from: "lib" }],
					allowAny: false,
					allowBoolean: false,
					allowNever: false,
					allowNullish: false,
					allowNumber: true,
					allowRegExp: false,
				},
			],
			/* Allow leading underscore for apollo gql __typename and lodash - already is allowed */
			"@typescript-eslint/naming-convention": [
				"error",
				{
					leadingUnderscore: "allow",
					selector: "default",
					format: null,
				},
			],
			/* Prevent checking wrong entry of an object */
			"@typescript-eslint/no-unnecessary-condition": "warn",
			/* Require imports are needed in React Native */
			"@typescript-eslint/no-require-imports": "off",
			/* Restrict declaring types only as interfaces (types error) */
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		},
	},
	{
		name: "Import Typescript",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		extends: [importX.flatConfigs.typescript],
		rules: {
			/* Duplicate from typescript */
			"import-x/named": "off",
			/* Duplicate from typescript */
			"import-x/namespace": "off",
			/* Duplicate from typescript */
			"import-x/default": "off",
			/* Duplicate from typescript */
			"import-x/no-named-as-default-member": "off",
			/* Duplicate from typescript */
			"import-x/no-unresolved": "off",
		},
	},
	{ name: "Prettier", ...prettier },
);
