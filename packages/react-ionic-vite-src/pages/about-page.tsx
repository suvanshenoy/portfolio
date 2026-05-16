import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { businessOutline } from "ionicons/icons";
import { Experience } from "@/components";
import { useDelegate } from "@/hooks";

export function AboutPage() {
	const { elementClicked, handleClick } = useDelegate();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle class="ml-3">About</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="py-4 m-2 my-10 leading-relaxed text-xl md:text-4xl flex justify-center mx-auto">
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
					{!elementClicked ? (
						<div
							className="shadow-xl p-8 rounded w-80 md:w-150 cursor-pointer"
							onClick={handleClick}
						>
							<div className="flex justify-between items-center">
								<IonIcon icon={businessOutline} size="large" />
								<p className="font-semibold text-xl md:text-2xl">Experience</p>
								<p className="font-semibold bg-[#0a0a80] rounded-full p-2 md:text-xl">
									6 Months
								</p>
							</div>
						</div>
					) : (
						<div
							className="shadow-xl p-8 rounded w-80 h-80 md:w-150 cursor-pointer overflow-auto overflow-y-auto"
							onClick={handleClick}
						>
							<div className="flex justify-between items-center">
								<IonIcon icon={businessOutline} size="large" />
								<p className="font-semibold text-xl md:text-2xl relative right-25 md:right-60">
									Experience
								</p>
							</div>
							<Experience
								companyName="Trikon Software Labs"
								workingExperience={{ years: 0, months: 6 }}
								position="Software Engineer"
								positionValidity="Full-Time"
								technologiesUsed={[
									"React",
									"Mui",
									"Tailwind",
									"Bryntum",
									"Twilio Api",
									"Nextjs",
								]}
							/>
						</div>
					)}
				</div>
			</IonContent>
		</IonPage>
	);
}
