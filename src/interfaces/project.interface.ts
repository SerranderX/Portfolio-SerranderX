import { StaticImageData } from "next/image";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import React, { SVGProps } from "react";

export interface ProjectInterface {
    name: string;
    description: lenguegeData[];
    url: string;
    image: StaticImageData;
    technologies: ToolsTypes[];
    icons: ((props: SVGProps<SVGSVGElement>) => React.JSX.Element)[]
}

interface lenguegeData {
    lenguage: string;
    data: string;
}