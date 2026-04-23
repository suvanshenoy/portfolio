import "../../packages/react-ionic-vite-src/globals.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { App } from "@packages/react-ionic-vite-src/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

defineCustomElements(window);

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
