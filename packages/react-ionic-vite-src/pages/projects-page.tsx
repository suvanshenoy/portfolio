import {
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
	isPlatform,
} from "@ionic/react";

import { ProjectCard } from "@/portfolio-ui/project-card";

export function ProjectsPage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ml-3">Projects</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{isPlatform("mobile") ? (
					<>
						<ProjectCard
							projectTitle="Eventify"
							projectGithubSrc="https://github.com/suvanshenoy/eventify"
						/>
						<ProjectCard
							projectTitle="MoniMind"
							projectGithubSrc="https://github.com/suvanshenoy/monimind-frontend"
						/>
						<ProjectCard
							projectTitle="Finance Dashboard UI"
							projectGithubSrc="https://github.com/suvanshenoy/finance-dashboard-ui"
						/>
						<ProjectCard
							projectTitle="Portfolio"
							projectGithubSrc="https://github.com/suvanshenoy/portfolio"
						/>
					</>
				) : (
					<IonGrid>
						<IonRow>
							<IonCol>
								<ProjectCard
									projectTitle="Eventify"
									projectGithubSrc="https://github.com/suvanshenoy/eventify"
								/>
							</IonCol>
							<IonCol>
								<ProjectCard
									projectTitle="MoniMind"
									projectGithubSrc="https://github.com/suvanshenoy/monimind-frontend"
								/>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol>
								<ProjectCard
									projectTitle="Finance Dashboard UI"
									projectGithubSrc="https://github.com/suvanshenoy/finance-dashboard-ui"
								/>
							</IonCol>
							<IonCol>
								<ProjectCard
									projectTitle="Portfolio"
									projectGithubSrc="https://github.com/suvanshenoy/portfolio"
								/>
							</IonCol>
						</IonRow>
					</IonGrid>
				)}
			</IonContent>
		</IonPage>
	);
}
