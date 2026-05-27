import { Button } from "@/shadcn-ui/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shadcn-ui/ui/card";

type ProjectCardProps = {
	projectGithubSrc: string;
	projectTitle: string;
	projectDescription?: string;
};

export function ProjectCard({
	projectTitle,
	projectDescription,
	projectGithubSrc,
}: ProjectCardProps) {
	return (
		<div className="p-4 m-2">
			<Card className="relative mx-auto w-60 md:w-120 bg-[#0c0c61] shadow-md shadow-black">
				<CardHeader>
					<CardTitle className="text-center font-bold text-2xl text-white">
						{projectTitle}
					</CardTitle>
					<CardDescription>{projectDescription}</CardDescription>
				</CardHeader>
				<CardFooter className="bg-[#0c0c61] ">
					<Button
						className="w-full bg-blue-900"
						onClick={() => {
							window.open(projectGithubSrc);
						}}
					>
						View
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
