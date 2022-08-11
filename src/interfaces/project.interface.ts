import { StaticImageData } from "next/image";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { SVGProps } from "react";

export interface ProjectInterface {
    name: string;
    description: lenguegeData[];
    url: string;
    image: StaticImageData;
    technologies: ToolsTypes[];
    icons: ((props: SVGProps<SVGSVGElement>) => JSX.Element)[]
}

interface lenguegeData {
    lenguage: string;
    data: string;
}