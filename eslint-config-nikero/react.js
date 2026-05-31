import pluginQuery from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier";
import { importX } from "eslint-plugin-import-x";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig(
	{
		name: "Import React",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		extends: [importX.flatConfigs.react],
	},
	{
		name: "React",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		plugins: { react },
		rules: {
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
			/* Disable PropTypes */
			"react/prop-types": "off",
			/* Explicitly set filename if it includes jsx */
			"react/jsx-filename-extension": ["warn", { extensions: [".jsx", "tsx"] }],
			/* Make all components arrow functions */
			"react/function-component-definition": [
				"warn",
				{
					namedComponents: "arrow-function",
					unnamedComponents: "arrow-function",
				},
			],
			/* Prevent unescaped template characters */
			"react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
			/* Nesting components are a bad practice */
			"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
			/* Prevent indices as keys */
			"react/no-array-index-key": "error",
			/* Prevent inconstant useState naming */
			"react/hook-use-state": ["warn", { allowDestructuredState: true }],
			/* Make components with no children a self-closing tag */
			"react/self-closing-comp": "warn",
			/* Prevent fragments as component syntax */
			"react/jsx-fragments": "error",
			/* Handle curly braces in JSX */
			"react/jsx-curly-brace-presence": [
				"warn",
				{ props: "never", children: "never", propElementValues: "always" },
			],
		},
		languageOptions: {
			parserOptions: {
				...react.configs.recommended.parserOptions,
				...react.configs["jsx-runtime"].parserOptions,
			},
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2021,
			},
		},
		settings: { react: { version: "detect" } },
	},
	{
		name: "React hooks",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		extends: [reactHooks.configs.flat.recommended],
	},
	pluginQuery.configs["flat/recommended"],
	{ name: "Prettier", ...prettier },
);
