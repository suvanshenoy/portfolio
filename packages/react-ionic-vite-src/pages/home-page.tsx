import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { OrbitingCircles } from "@shadcn-ui/orbiting-circles";
import { File } from "lucide-react";
import { Introduction, TechStack } from "../components";

export function HomePage() {
	return (
		<IonPage className="home-page">
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<Introduction name="Suvan Shenoy" profession="Software Developer" />
				<TechStack />
			</IonContent>
		</IonPage>
	);
}
