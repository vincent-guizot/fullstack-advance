import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  config: path.resolve(__dirname, "config", "config.js"),
  // Use config.js instead of config.json
  "models-path": path.resolve(__dirname, "models"),
  "seeders-path": path.resolve(__dirname, "seeders"),
  "migrations-path": path.resolve(__dirname, "migrations"),
};
