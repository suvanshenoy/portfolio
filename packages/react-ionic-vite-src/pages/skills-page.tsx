import {
	IonContent,
	IonHeader,
	IonPage,
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
				<div className="p-2">
					<ul>
						<h3>Languages/Runtimes</h3>
						{skills.languageRuntimes.map((value) => (
							<li>{value}</li>
						))}
					</ul>
					<br />
					<ul>
						<h3>Library/Frameworks</h3>
						{skills.libraryFrameworks.map((value) => (
							<li>{value}</li>
						))}
					</ul>
					<br />
					<ul>
						<h3>Deployment/Devops</h3>
						{skills.deploymentDevops.map((value) => (
							<li>{value}</li>
						))}
					</ul>
					<br />
					<ul>
						<h3>Platform/Tools</h3>
						{skills.platformTools.map((value) => (
							<li>{value}</li>
						))}
					</ul>
					<br />
				</div>
			</IonContent>
		</IonPage>
	);
}

const skills = {
	languageRuntimes: ["Html", "Css", "Javascript", "Typescript", "Nodejs"],
	libraryFrameworks: [
		"React",
		"Tailwind",
		"Zustand",
		"Zod",
		"Vite",
		"Ionic",
		"Mui",
		"Bryntum",
		"Nextjs",
	],
	platformTools: [
		"Git",
		"Github",
		"Linux",
		"Clickup",
		"Slack",
		"Oracle Virutal Box",
	],
	deploymentDevops: ["Docker", "Vercel"],
};
