import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { Introduction, TechStack } from "@/components";

export function HomePage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ml-3">Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Introduction name="Suvan Shenoy" />
				<TechStack />
			</IonContent>
		</IonPage>
	);
}
