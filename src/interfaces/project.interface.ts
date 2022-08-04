import { StaticImageData } from "next/image";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";

export interface ProjectInterface {
    name: string;
    description: lenguegeData[];
    url: string;
    image: StaticImageData;
    technologies: ToolsTypes[];
}

interface lenguegeData {
    lenguage: string;
    data: string;
}