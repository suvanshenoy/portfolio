import { IonButton, isPlatform } from "@ionic/react";
import { useCallback, useEffect, useState } from "react";
import { useFetchLinks } from "@/hooks";
import { SimpleIconCircles } from "@/portfolio-ui";

type IntroductionType = {
	name: "Suvan Shenoy";
	profession: "Software Developer" | "Frontend Developer";
};

const professions: Array<IntroductionType["profession"]> = [
	"Software Developer",
	"Frontend Developer",
];

export function Introduction({ name }: Pick<IntroductionType, "name">) {
	const { linkUrl } = useFetchLinks({ apiRoute: "link/resume" });
	const [profession, setProfession] =
		useState<IntroductionType["profession"]>("Software Developer");

	const shuffleProfession = useCallback(() => {
		const index = Math.floor(Math.random() * professions.length);
		const newProfession = professions[index];
		if (newProfession === profession) {
			shuffleProfession();
		} else {
			setProfession(newProfession);
		}
	}, [profession]);

	useEffect(() => {
		const intervalId = setInterval(shuffleProfession, 1000);
		return () => clearInterval(intervalId);
	}, [shuffleProfession]);

	return (
		<div className="py-4 m-2">
			<div className="m-2 p-2 text-3xl md:text-6xl leading-tight font-bold">
				<p>
					Hey, I'm
					<br />
					{name}
				</p>
				<p className="text-[#094886] font-bold">A {profession}</p>
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
					onClick={() => window.open(linkUrl)}
					className="my-2 font-semibold text-white"
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
