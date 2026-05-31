import { defineConfig } from "eslint/config";

import base from "./base.js";
import typescript from "./typescript.js";

export default defineConfig(base, typescript);
