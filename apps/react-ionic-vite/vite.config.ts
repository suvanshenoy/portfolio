import path from "node:path";
import process from "node:process";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const root = path.resolve(__dirname, "../../packages/react-ionic-vite-src");

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
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
		define: {
			__PORTFOLIO_BACKEND_URL__: JSON.stringify(env.PORTFOLIO_BACKEND_URL),
		},
		server: {
			port: env.PORTFOLIO_FRONTEND_PORT
				? Number(env.PORTFOLIO_FRONTEND_PORT)
				: 5173,
		},
	};
});
