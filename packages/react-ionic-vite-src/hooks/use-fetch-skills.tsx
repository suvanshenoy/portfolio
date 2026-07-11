import { CapacitorHttp } from "@capacitor/core";
import { isPlatform } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";

type SkillNames = "languageRuntimes" | "libraryFrameworks" | "platformTools" | "deploymentDevops";

type SkillJsonResponse = {
  id: number;
  name: SkillNames;
  skillList?: string[];
};

type ApiRoute = `skill/${SkillNames}` | "skills";

export function useFetchSkills({
  apiRoute,
}: {
  apiRoute?: ApiRoute | ApiRoute[];
}) {
  const [skillData, setSkillData] = useState<
    SkillJsonResponse | SkillJsonResponse[]
  >();

  const [skillList, setSkillList] = useState<SkillJsonResponse["skillList"]>();
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    const fetchLinkData = async () => {
      if (isPlatform("hybrid")) {
        const response = await CapacitorHttp.get({
          url: `${API_BASE_URL}/api/${apiRoute}`,
        });
        const jsonResponse: SkillJsonResponse = response.data;
        setSkillData(jsonResponse);
        setSkillList(jsonResponse.skillList);
        setIsDoneLoading(true);
      } else {
        const response = await axios.get<SkillJsonResponse>(
          `${API_BASE_URL}/api/${apiRoute}`,
        );
        const jsonResponse: SkillJsonResponse = response.data;
        setSkillData(jsonResponse);
        setSkillList(jsonResponse.skillList);
        setIsDoneLoading(true);
      }
    };
    fetchLinkData();
  }, []);

  return { skillData, skillList, isDoneLoading };
}
