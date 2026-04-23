import * as path from "node:path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "../../packages/react-ionic-vite-src");

export default defineConfig({
	root: "./",
	plugins: [
		react(),
		babel({ presets: [reactCompilerPreset()] }),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@packages/react-ionic-vite-src": root,
			"@shadcn-ui": path.resolve(
				__dirname,
				"../../packages/react-ionic-vite-src/shadcn-ui/ui",
			),
			"@": path.resolve(__dirname, "../../packages/react-ionic-vite-src"),
		},
	},
});
