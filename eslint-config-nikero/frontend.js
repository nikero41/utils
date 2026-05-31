import tailwindPlugin from "eslint-plugin-better-tailwindcss";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import { defineConfig } from "eslint/config";

import react from "./react.js";

export default defineConfig(
	{
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		extends: [jsxA11yPlugin.flatConfigs.recommended],
		rules: { "jsx-a11y/lang": "warn" },
	},
	{
		name: "Tailwind",
		extends: [tailwindPlugin.configs.recommended],
		rules: {
			"better-tailwindcss/enforce-consistent-line-wrapping": "off",
		},
	},
	react,
);
