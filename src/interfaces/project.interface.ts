import { StaticImageData } from "next/image";

export interface ProjectInterface {
    name: string;
    description: lenguegeData[];
    url: string;
    image: StaticImageData;
}

interface lenguegeData {
    lenguage: string;
    data: string;
}