import { defineConfig } from "oxlint";

export default defineConfig({
	plugins: ["node"],
	rules: {
		"no-async-endpoint-handlers": "off",
	},
});
