import { IonIcon } from "@ionic/react";
import { logoIonic, logoNodejs, logoReact } from "ionicons/icons";

export function TechStack() {
	return (
		<div className="h-40  p-2 m-2">
			<div className="relative left-1">
				<h1>Tech Stack</h1>
				<IonIcon icon={logoReact} style={{ fontSize: 50 }} />
				<IonIcon icon={logoIonic} style={{ fontSize: 50 }} />
				<IonIcon icon={logoNodejs} style={{ fontSize: 50 }} />
			</div>
		</div>
	);
}
