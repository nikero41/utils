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
	jsPlugins: ["eslint-plugin-turbo"],
	settings: {
		turbo: turboConfig.settings,
	},
	rules: {
		...turboConfig.rules,
	},
});
