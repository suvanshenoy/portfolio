import { CapacitorHttp } from "@capacitor/core";
import { isPlatform } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";

type LinkNames = "resume" | "gmail" | "github" | "linkedin";

type SkillNames = "languageRuntimes" | "libraryFrameworks" | "platformTools" | "deploymentDevops";

type JsonResponse = {
  id: number;
  name: LinkNames | SkillNames;
  url?: string;
  skillList?: string[];
};

type LinkJsonResponse<T extends keyof JsonResponse = "id" | "name" | "url"> = Pick<JsonResponse, T> extends { [K in keyof JsonResponse]: JsonResponse[K] } ? Pick<{ [K in keyof JsonResponse]: Exclude<JsonResponse[K], SkillNames> }, T> : never;

type SkillJsonResponse<T extends keyof JsonResponse = "id" | "name" | "skillList"> = Pick<JsonResponse, T> extends { [K in keyof JsonResponse]: JsonResponse[K] } ? Pick<{ [K in keyof JsonResponse]: Exclude<JsonResponse[K], LinkNames> }, T> : never;

type ApiRoutes = {
  link: `link/${LinkNames}` | "links",
  skill: `skill/${SkillNames}` | "skills"
}

export function useFetch({
  apiRoute,
}: {
  apiRoute?: ApiRoutes["link"] | ApiRoutes["skill"]
}) {

  const [linkUrl, setLinkUrl] = useState<LinkJsonResponse["url"]>();
  const [skillList, setSkillList] = useState<SkillJsonResponse["skillList"]>()
  const [linkData, setLinkData] = useState<
    LinkJsonResponse>();
  const [skillData, setSkillData] = useState<
    SkillJsonResponse
  >();

  const [isDoneLoading, setIsDoneLoading] = useState(false);

  const checkIfResponseEquals = (jsonResponse: LinkJsonResponse | SkillJsonResponse) => {
    if (jsonResponse.name === "github" || jsonResponse.name === "resume" || jsonResponse.name === "gmail" || jsonResponse.name === "linkedin") {
      setLinkData(jsonResponse);
      setLinkUrl(jsonResponse.url);
      setIsDoneLoading(true);
    }

    if (jsonResponse.name === "languageRuntimes" || jsonResponse.name === "libraryFrameworks" || jsonResponse.name === "platformTools" || jsonResponse.name === "deploymentDevops") {
      setSkillData(jsonResponse);
      setSkillList(jsonResponse.skillList);
      setIsDoneLoading(true);
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      if (isPlatform("hybrid")) {
        const response = await CapacitorHttp.get({
          url: `${API_BASE_URL}/api/${apiRoute}`,
        });
        const jsonResponse: LinkJsonResponse | SkillJsonResponse = response.data;
        checkIfResponseEquals(jsonResponse);
      } else {
        const response = await axios.get<LinkJsonResponse | SkillJsonResponse>(
          `${API_BASE_URL}/api/${apiRoute}`,
        );
        const jsonResponse: LinkJsonResponse | SkillJsonResponse = response.data;
        checkIfResponseEquals(jsonResponse);
      }
    };
    fetchData();
  }, []);

  return { linkData, skillData, linkUrl, skillList, isDoneLoading };

}
