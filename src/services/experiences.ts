import i18n from "@/i18n";
import { Experience } from "@/interfaces/Experience";

export const getExperiences = (): Experience[] => {
  const items = i18n.t("experiences", { returnObjects: true }) as Array<{
    title: string;
    date: string;
    description: string;
  }>;
  return items.map((item, index) => ({
    id: `exp-${index}`,
    title: item.title,
    date: item.date,
    description: item.description,
  }));
};
