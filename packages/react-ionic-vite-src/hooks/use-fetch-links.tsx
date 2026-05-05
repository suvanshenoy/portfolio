import { CapacitorHttp } from "@capacitor/core";
import { isPlatform } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";

type LinkNames = "resume" | "gmail" | "github" | "linkedin";

type LinkJsonResponse = {
	id: number;
	name: LinkNames;
	url?: string;
};

type ApiRoute = `link/${LinkNames}` | "links";

export function useFetchLinks({
	apiRoute,
}: {
	apiRoute?: ApiRoute | ApiRoute[];
}) {
	const [linkData, setLinkData] = useState<
		LinkJsonResponse | LinkJsonResponse[]
	>();

	const [linkUrl, setLinkUrl] = useState<LinkJsonResponse["url"]>();

	useEffect(() => {
		const fetchLinkData = async () => {
			if (isPlatform("hybrid")) {
				const response = await CapacitorHttp.get({
					url: `${API_BASE_URL}/api/${apiRoute}`,
				});
				const jsonResponse: LinkJsonResponse = response.data;
				setLinkData(jsonResponse);
				setLinkUrl(jsonResponse.url);
			} else {
				const response = await axios.get<LinkJsonResponse>(
					`${API_BASE_URL}/api/${apiRoute}`,
				);
				const jsonResponse: LinkJsonResponse = response.data;
				setLinkData(jsonResponse);
				setLinkUrl(jsonResponse.url);
			}
		};
		fetchLinkData();
	}, []);

	return { linkData, linkUrl };
}
