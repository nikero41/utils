import { base, typescript, react, frontend } from "@repo/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
	extends: [base, typescript, react, frontend],
});
