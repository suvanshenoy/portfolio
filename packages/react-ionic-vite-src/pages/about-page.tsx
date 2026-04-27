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
					<IonTitle class="ml-3">About</IonTitle>
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
					<div className=" bg-gray-800 p-8 rounded w-80 md:w-150">
						<div className="flex justify-between items-center">
							<IonIcon icon={businessOutline} size="large" />
							<p className="font-semibold text-xl md:text-2xl">Experience</p>
							<p className="font-semibold bg-gray-700 rounded-full p-2 md:text-xl">
								6 Months
							</p>
						</div>
					</div>

					<div className=" bg-gray-800 p-8 rounded w-80 md:w-150">
						<div className="flex justify-between items-center">
							<IonIcon icon={locationOutline} size="large" />
							<p className="mr-8 font-semibold text-xl md:text-2xl">Location</p>
							<p className="font-semibold mr-7 bg-gray-700 rounded-full p-2 md:text-xl">
								India
							</p>
						</div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
}
