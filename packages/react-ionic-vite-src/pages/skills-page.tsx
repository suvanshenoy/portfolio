import {
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

export function SkillsPage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Skills</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid>
					<h2>Languages</h2>
					<IonRow>
						<IonCol>Html</IonCol>
						<IonCol>Css</IonCol>
						<IonCol>Javascript</IonCol>
						<IonCol>Typescript</IonCol>
					</IonRow>

					<h2>Frameworks/Libraries</h2>
					<IonRow>
						<IonCol>Nextjs</IonCol>
						<IonCol>React</IonCol>
						<IonCol>Ionic</IonCol>
						<IonCol>Zustand</IonCol>
					</IonRow>

					<h2>Tools</h2>
					<IonRow>
						<IonCol>Git</IonCol>
						<IonCol>Github</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
}
