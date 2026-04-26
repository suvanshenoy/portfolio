import { Button } from "@/shadcn-ui/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shadcn-ui/ui/card";

type ProjectCardProps = {
	projectImageSrc?: string;
	projectGithubSrc: string;
	projectTitle: string;
	projectDescription?: string;
};

export function ProjectCard({
	projectImageSrc,
	projectTitle,
	projectDescription,
	projectGithubUrl,
}: ProjectCardProps) {
	return (
		<div className="p-2 m-2">
			<Card className="relative mx-auto w-full max-w-4xl pt-0">
				<div className="absolute inset-0 z-30 aspect-video bg-black/35" />
				<img
					src={projectImageSrc}
					alt="Project Cover"
					className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
				/>
				<CardHeader>
					<CardTitle>{projectTitle}</CardTitle>
					<CardDescription>{projectDescription}</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button
						className="w-full"
						onClick={() => {
							window.open(projectGithubUrl);
						}}
					>
						View
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
