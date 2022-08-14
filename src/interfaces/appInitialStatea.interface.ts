import { AppLenguageInterface } from "@hooks/useLenguage";
import { CarouselFiltersInterface } from "./carouselFiltersa.interface";
import { EmailJSInterface } from "./emailJS.interface";

export interface AppInitialState {
    projectsFilters: CarouselFiltersInterface
    lenguageState: AppLenguageInterface
    emailJSState: EmailJSInterface
}