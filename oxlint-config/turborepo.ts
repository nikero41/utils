import turboPlugin from "eslint-plugin-turbo";
import { defineConfig } from "oxlint";

const turboConfig = defineConfig({
	// @ts-expect-error - eslint-plugin-turbo uses the generic eslint config type
	settings: turboPlugin.configs?.["flat/recommended"]?.settings,
	// @ts-ignore
	rules: turboPlugin.configs?.["flat/recommended"]?.rules,
});

export default defineConfig({
	ignorePatterns: ["node_modules"],
	plugins: ["oxc", "unicorn", "import", "eslint", "promise"],
	categories: {
		perf: "warn",
		pedantic: "warn",
		style: "warn",
		nursery: "warn",
		suspicious: "warn",
	},
	options: {
		typeAware: true,
		respectEslintDisableDirectives: false,
		reportUnusedDisableDirectives: "warn",
	},
	jsPlugins: ["eslint-plugin-import-zod", "eslint-plugin-turbo"],
	settings: {
		turbo: turboConfig.settings,
	},
	rules: {
		"no-void": ["error", { allowAsStatement: true }],
		"func-style": ["error", "declaration", { allowArrowFunctions: true }],
		"arrow-body-style": ["warn", "as-needed"],
		"no-unused-vars": "error",
		// zod/mini uses z._default
		"no-underscore-dangle": ["warn", { allow: ["_default"] }],
		"no-console": "warn",
		eqeqeq: ["error", "always", { null: "ignore" }],
		"no-param-reassign": "warn",
		"no-empty": "error",
		"no-var": "error",

		"import-zod/prefer-zod-namespace": "error",
		...turboConfig.rules,

		"max-lines-per-function": "off",
		"max-lines": "off",
		"no-warning-comments": "off",
		"sort-imports": "off",
		"sort-keys": "off",
		"id-length": "off",
		"capitalized-comments": "off",
		"no-ternary": "off",
		"no-implicit-coercion": "off",
		"max-params": "off",
		curly: "off",
		"new-cap": "off",
		"max-statements": "off",
		"no-magic-numbers": "off",
		"no-nested-ternary": "off",
		"no-shadow": "off",
		"no-inline-comments": "off",
		"no-map-spread": "off",
		"no-negated-condition": "off",
		"prefer-await-to-callbacks": "off",
		"init-declarations": "off",
		"require-unicode-regexp": "off",
		"no-accumulating-spread": "off",
		"func-names": "off",
		"max-classes-per-file": "off",
		"no-promise-executor-return": "off",

		"unicorn/prefer-modern-math-apis": "warn",
		"unicorn/no-abusive-eslint-disable": "warn",
		"unicorn/explicit-length-check": "off",
		"unicorn/no-static-only-class": "off",
		"unicorn/prefer-array-index-of": "off",
		"unicorn/no-await-expression-member": "off",
		"unicorn/no-null": "off",
		"unicorn/no-nested-ternary": "off",
		"unicorn/filename-case": "off",
		"unicorn/prefer-global-this": "off",
		"unicorn/no-negated-condition": "off",
		"unicorn/no-array-callback-reference": "off",

		"import/no-cycle": "error",
		"import/group-exports": "off",
		"import/no-named-export": "off",
		"import/exports-last": "off",
		"import/consistent-type-specifier-style": "off",
		"import/no-nodejs-modules": "off",
		"import/no-namespace": "off",
		"import/no-named-as-default-member": "off",
		"import/no-unassigned-import": "off",
		"import/prefer-default-export": "off",
		"import/max-dependencies": "off",
		"import/no-anonymous-default-export": "off",

		"promise/avoid-new": "off",
		"promise/prefer-await-to-then": "off",
	},
});
