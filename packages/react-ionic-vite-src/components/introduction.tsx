import { CapacitorHttp } from "@capacitor/core";
import { IonButton, isPlatform } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/constants";
import { SimpleIconCircles } from "@/portfolio-ui";

type IntroductionType = {
	name: "Suvan Shenoy";
	profession: "Software Developer" | "Frontend Developer";
};

type LinkJsonResponse = {
	id: number;
	name: string;
	url: string;
};

export function Introduction({ name, profession }: IntroductionType) {
	const [resumeData, setResumeData] = useState<LinkJsonResponse>();

	useEffect(() => {
		const fetchResumeData = async () => {
			if (isPlatform("hybrid")) {
				const response = await CapacitorHttp.get({
					url: `${API_BASE_URL}/api/link/resume`,
				});
				const jsonResponse: LinkJsonResponse = response.data;
				setResumeData(jsonResponse);
			} else {
				const response = await axios.get<LinkJsonResponse>(
					`${API_BASE_URL}/api/link/resume`,
				);
				const jsonResponse: LinkJsonResponse = response.data;
				setResumeData(jsonResponse);
			}
		};
		fetchResumeData();
	}, []);

	return (
		<div className="py-4 m-2">
			<div className="m-2 p-2 text-3xl md:text-6xl leading-tight">
				<p>
					Hey, I'm
					<br />
					{name}
					<br />A {profession}
				</p>
			</div>
			<div className="flex justify-center items-center h-125">
				{isPlatform("hybrid") ? (
					<>
						<SimpleIconCircles
							radius={30}
							iconSize={30}
							simpleIconImages={languageRuntimesImages}
						/>
						<SimpleIconCircles
							radius={90}
							iconSize={90}
							simpleIconImages={libraryFrameworksImages}
						/>
					</>
				) : (
					<>
						<SimpleIconCircles
							radius={30}
							iconSize={30}
							simpleIconImages={languageRuntimesImages}
						/>
						<SimpleIconCircles
							radius={120}
							iconSize={120}
							simpleIconImages={libraryFrameworksImages}
						/>
					</>
				)}
			</div>
			<div className="p-2 m-2">
				<p className="leading-relaxed sm:text-3xl text-xl">
					I build scalable, user-friendly application with modern technologies
				</p>
				<IonButton
					onClick={() => window.open(resumeData?.url)}
					className="my-2"
				>
					Resume
				</IonButton>
			</div>
		</div>
	);
}
export const languageRuntimesImages = [
	"html5",
	"javascript",
	"typescript",
	"nodedotjs",
];

export const libraryFrameworksImages = [
	"ionic",
	"react",
	"tailwindcss",
	"vite",
	"mui",
];
