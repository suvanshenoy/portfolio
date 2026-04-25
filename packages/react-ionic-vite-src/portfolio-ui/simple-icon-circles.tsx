import { IonImg } from "@ionic/react";
import { OrbitingCircles } from "@/shadcn-ui/ui/orbiting-circles";

type SimpleIconImage = {
	radius: number;
	iconSize: number;
	simpleIconImages: string[];
};

export function SimpleIconCircles({
	radius,
	iconSize,
	simpleIconImages,
}: SimpleIconImage) {
	return (
		<OrbitingCircles radius={radius} iconSize={iconSize}>
			{simpleIconImages.map((image) => (
				<IonImg src={`https://cdn.simpleicons.org/${image}/${image}`} />
			))}
		</OrbitingCircles>
	);
}
