import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.example.app",
	appName: "portfolio",
	webDir: "../../apps/react-ionic-vite/dist",
	android: {
		path: "./android",
	},
};

export default config;
