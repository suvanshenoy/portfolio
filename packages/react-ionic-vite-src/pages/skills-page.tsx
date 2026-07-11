import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { useFetch } from "@/hooks";

export function SkillsPage() {
	const skills = {
		languageRuntimes: useFetch({ apiRoute: "skill/languageRuntimes" })?.skillList ?? [""],
		libraryFrameworks: useFetch({ apiRoute: "skill/libraryFrameworks" })?.skillList ?? [""],
		platformTools: useFetch({ apiRoute: "skill/platformTools" }).skillList ?? [""],
		deploymentDevops: useFetch({ apiRoute: "skill/deploymentDevops" }).skillList ?? [""]
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className="ml-3">Skills</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="p-2 m-2">
					<h3 className="my-2 py-2 ">Languages/Runtimes</h3>
					<ul className="inline-flex flex-wrap md:flex-row  space-x-2 gap-8 p-4 rounded-md">
						{skills.languageRuntimes.map((value) => (
							<li className="p-4 bg-[#0c0c61] shadow-md shadow-black text-gray-200 rounded-md font-semibold">
								{value}
							</li>
						))}
					</ul>
					<br />
					<h3 className="my-2 py-2">Library/Frameworks</h3>
					<ul className="inline-flex flex-wrap md:flex-row  space-x-2 gap-8 p-4 rounded-md">
						{skills.libraryFrameworks.map((value) => (
							<li className="p-4 bg-[#0c0c61] shadow-md shadow-black text-gray-200 rounded-md font-semibold">
								{value}
							</li>
						))}
					</ul>
					<br />
					<h3 className="my-2 py-2">Deployment/Devops</h3>
					<ul className="inline-flex flex-wrap md:flex-row  space-x-2 gap-8 p-4 rounded-md">
						{skills.deploymentDevops.map((value) => (
							<li className="p-4 bg-[#0c0c61] shadow-md shadow-black text-gray-200 rounded-md font-semibold">
								{value}
							</li>
						))}
					</ul>
					<br />
					<h3 className="my-2 py-2">Platform/Tools</h3>
					<ul className="inline-flex flex-wrap md:flex-row  space-x-2 gap-8 p-4 rounded-md">
						{skills.platformTools.map((value) => (
							<li className="p-4 bg-[#0c0c61] shadow-md shadow-black text-gray-200 rounded-md font-semibold">
								{value}
							</li>
						))}
					</ul>
					<br />
				</div>
			</IonContent>
		</IonPage>
	);
}
