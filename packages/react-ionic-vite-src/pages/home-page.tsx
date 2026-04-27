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
		<IonPage className="home-page">
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ml-3">Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Introduction name="Suvan Shenoy" profession="Software Developer" />
				<TechStack />
			</IonContent>
		</IonPage>
	);
}
