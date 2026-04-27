import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { logoGithub, logoLinkedin, mail } from "ionicons/icons";

export function ContactPage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle class="ml-3">Contact</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="p-2 ml-3">
					<h1>Let's connect</h1>
					<p className="text-xl">
						I'm always open to discussing new opportunities or interesting
						projects
					</p>
				</div>
				<div className="flex flex-col  gap-2 space-y-4 p-4">
					<div className="flex  gap-2 bg-gray-800 p-5  rounded">
						<IonIcon icon={mail} size="large" />
						<a href="suvanshenoy155@gmail.com" className="mt-1">
							suvanshenoy155@gmail.com
						</a>
					</div>

					<div className="flex gap-2 bg-gray-800 p-5 rounded">
						<IonIcon icon={logoGithub} size="large" />
						<a href="https://github.com/suvanshenoy" className="mt-1">
							https://github.com/suvanshenoy
						</a>
					</div>

					<div className="flex gap-2 bg-gray-800 p-5 rounded">
						<IonIcon icon={logoLinkedin} size="large" />
						<a
							href="https://www.linkedin.com/in/suvan-shenoy-57876825b"
							className="mt-1"
						>
							https://www.linkedin.com/in/suvan-shenoy-57876825b/
						</a>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
