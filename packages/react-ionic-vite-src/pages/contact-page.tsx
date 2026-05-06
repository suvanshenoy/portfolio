import {
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonSpinner,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import { document, logoGithub, logoLinkedin, mail } from "ionicons/icons";
import { useFetchLinks } from "@/hooks";

export function ContactPage() {
	const { linkData, isDoneLoading } = useFetchLinks({ apiRoute: "links" });

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle class="ml-3">Contact</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="p-2 m-4 ">
					<p className="text-center text-xl md:text-4xl leading-relaxed">
						Let's connect
						<br />
						I'm always open to discussing new opportunities or interesting
						projects
					</p>
				</div>
				{isDoneLoading ? (
					<div className="flex flex-col w-85 md:w-1/2 xl:w-1/4 gap-2  mx-auto space-y-4 p-4">
						{Array.isArray(linkData) &&
							linkData.map((link) => (
								<div
									key={link.id}
									className="flex gap-2 bg-gray-800 p-7 md:p-10 rounded"
								>
									<IonIcon
										icon={
											link.name === "github"
												? logoGithub
												: link.name === "linkedin"
													? logoLinkedin
													: link.name === "resume"
														? document
														: mail
										}
										className="text-4xl px-4"
									/>
									<button
										type="button"
										onClick={() =>
											link.name === "gmail"
												? window.open(`mailto:${link.url}`)
												: window.open(link.url)
										}
										className="mt-1 text-blue-500 text-xl md:text-2xl"
									>
										{link.name}
									</button>
								</div>
							))}
					</div>
				) : (
					<div className="flex justify-center">
						<IonSpinner></IonSpinner>
					</div>
				)}
			</IonContent>
		</IonPage>
	);
}
