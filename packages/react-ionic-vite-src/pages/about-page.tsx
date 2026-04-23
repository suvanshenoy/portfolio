import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { businessOutline, locationOutline } from "ionicons/icons";
export function AboutPage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>About</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="py-4 m-2 my-10 leading-relaxed text-xl md:text-4xl flex justify-center">
					<p>
						I'm a passionate software developer
						<br />
						who loves building web and mobile
						<br />
						applications that solve real-world
						<br />
						problems
					</p>
				</div>
				<div className="flex flex-col gap-2 p-2 justify-center items-center space-y-4">
					<div className=" bg-gray-800 p-2 rounded w-80 md:w-150 flex gap-2 justify-around">
						<IonIcon icon={businessOutline} size="large" className="my-4" />
						<h2>Experience</h2>
						<p className="font-semibold my-5">6 Months</p>
					</div>

					<div className=" bg-gray-800 p-2 rounded w-80 md:w-150 flex gap-2 justify-around">
						<IonIcon icon={locationOutline} size="large" className="my-4" />
						<h2>Location</h2>
						<p className="font-semibold my-5">India</p>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
