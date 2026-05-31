import tailwind from "eslint-plugin-better-tailwindcss";
import { defineConfig } from "oxlint";

import react from "./react.ts";

export default defineConfig({
	extends: [react],
	plugins: ["jsx-a11y"],
	jsPlugins: ["eslint-plugin-better-tailwindcss"],
	rules: {
		"jsx-a11y/prefer-tag-over-role": "off",
		...tailwind.configs.recommended.rules,
		"better-tailwindcss/enforce-consistent-line-wrapping": "off",
	},
});
