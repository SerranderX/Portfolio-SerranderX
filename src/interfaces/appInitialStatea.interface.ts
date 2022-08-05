import { AppLenguageInterface } from "@hooks/useLenguage";
import { CarouselFiltersInterface } from "./carouselFiltersa.interface";

export interface AppInitialState {
    projectsFilters: CarouselFiltersInterface
    lenguageState: AppLenguageInterface
}