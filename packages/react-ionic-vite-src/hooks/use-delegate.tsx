import { useState } from "react";

export function useDelegate() {
	const [elementClicked, setElementClicked] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = e.currentTarget;
		if (target.matches("div")) {
			setElementClicked(true);
		}
	};

	return { elementClicked, handleClick };
}
