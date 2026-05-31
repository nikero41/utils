import { defineConfig } from "oxlint";

// TODO: missing react/function-component-definition

export default defineConfig({
	plugins: ["react"],
	jsPlugins: [
		"@tanstack/eslint-plugin-query",
		{ name: "react-hooks-js", specifier: "eslint-plugin-react-hooks" },
	],
	rules: {
		"react/jsx-key": "error",
		"react/no-unstable-nested-components": ["warn", { allowAsProps: true }],

		"react/jsx-no-constructed-context-values": "off",
		"react/jsx-max-depth": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-handler-names": "off",
		"react/state-in-constructor": "off",
		"react/prefer-function-component": "warn",

		"react-hooks-js/config": "error",
		"react-hooks-js/error-boundaries": "error",
		"react-hooks-js/gating": "error",
		"react-hooks-js/globals": "error",
		"react-hooks-js/immutability": "error",
		"react-hooks-js/preserve-manual-memoization": "error",
		"react-hooks-js/purity": "error",
		"react-hooks-js/refs": "error",
		"react-hooks-js/set-state-in-effect": "error",
		"react-hooks-js/set-state-in-render": "error",
		"react-hooks-js/static-components": "error",
		"react-hooks-js/unsupported-syntax": "warn",
		"react-hooks-js/use-memo": "error",
		"react-hooks-js/incompatible-library": "warn",

		"@tanstack/query/exhaustive-deps": "error",
		"@tanstack/query/no-rest-destructuring": "warn",
		"@tanstack/query/stable-query-client": "error",
		"@tanstack/query/no-unstable-deps": "error",
		"@tanstack/query/infinite-query-property-order": "error",
		"@tanstack/query/no-void-query-fn": "error",
		"@tanstack/query/mutation-property-order": "error",
	},
});
