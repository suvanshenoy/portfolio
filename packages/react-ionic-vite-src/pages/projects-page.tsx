import {
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
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
						<div className="flex flex-col">
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
						</div>
					</IonGrid>
				)}
			</IonContent>
		</IonPage>
	);
}
