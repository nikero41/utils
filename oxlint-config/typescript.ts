import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["typescript"],
	options: {
		typeAware: true,
	},
	rules: {
		"no-unused-vars": "off",

		"typescript/no-unused-vars": "error",
		"typescript/no-unnecessary-condition": "warn",
		"typescript/array-type": ["warn", { default: "array" }],
		"typescript/no-deprecated": "warn",
		"typescript/ban-ts-comment": ["error", { minimumDescriptionLength: 5 }],
		"typescript/only-throw-error": ["error", { allow: [] }],
		// TODO: "typescript/naming-convention": "warn",
		"typescript/no-misused-promises": [
			"error",
			{
				checksVoidReturn: {
					attributes: false,
					arguments: false,
					properties: false,
				},
			},
		],
		"typescript/restrict-plus-operands": [
			"error",
			{
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
				allowNumberAndString: false,
				allowRegExp: false,
			},
		],
		"typescript/restrict-template-expressions": [
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
		"typescript/consistent-type-definitions": ["error", "interface"],
		"typescript/consistent-type-imports": [
			"error",
			{ fixStyle: "inline-type-imports", disallowTypeAnnotations: false },
		],
		"typescript/switch-exhaustiveness-check": [
			"error",
			{
				allowDefaultCaseForExhaustiveSwitch: false,
				considerDefaultExhaustiveForUnions: true,
			},
		],
		"typescript/no-explicit-any": "error",

		"typescript/prefer-readonly-parameter-types": "off",
		"typescript/no-confusing-void-expression": "off",
		"typescript/strict-boolean-expressions": "off",
		"typescript/strict-void-return": "off",
		"typescript/prefer-nullish-coalescing": "off",
		"typescript/return-await": "error",
		"typescript/consistent-return": "off",
		"typescript/no-unsafe-type-assertion": "off",
		"typescript/no-extraneous-class": "off",
		"typescript/prefer-enum-initializers": "off",
		"typescript/parameter-properties": "off",
	},
});
