import { useDelegate } from "@/hooks";

type ExperienceType = {
	companyName: "Trikon Software Labs";
	workingExperience: {
		years: 0;
		months: 6;
	};
	position: "Software Engineer" | "Frontend Developer" | "Software Developer";
	positionValidity: "Full-Time" | "Intern";
	technologiesUsed: string[];
};

export function Experience({
	companyName,
	workingExperience,
	position,
	positionValidity,
	technologiesUsed,
}: ExperienceType) {
	const { elementClicked, handleClick } = useDelegate();
	return (
		<div
			className="shadow-xl border-t border-t-blue-900 shadow-black  relative top-2 p-2 m-2 rounded-md"
			onClick={handleClick}
		>
			{!elementClicked ? (
				<div className="flex justify-between p-2 m-2">
					<p className="font-semibold md:text-2xl p-2 mt-2">
						{companyName} ({positionValidity})
					</p>
					<div className="text-sm md:text-xl bg-[#0c0c61] rounded-full p-4 md:p-2 m-2">
						{!workingExperience.years ? (
							<p className="text-center font-bold">
								{workingExperience?.months} months
							</p>
						) : (
							<p className="text-center font-bold ">
								{workingExperience.years}
							</p>
						)}
					</div>
				</div>
			) : (
				<div className=" flex flex-col justify-between p-2 m-2">
					<div>
						<p className="font-semibold md:text-2xl p-2 mt-2 text-center">
							{companyName} ({positionValidity})
						</p>
					</div>

					<p className="font-semibold md:text-xl p-2 mt-2 text-center">
						Position: {position}
					</p>

					<ul>
						{technologiesUsed.map((tech) => (
							<li
								key={tech}
								className="font-semibold md:text-xl p-2 mt-2 text-center"
							>
								{tech}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
