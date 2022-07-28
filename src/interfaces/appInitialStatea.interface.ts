import { AppLenguageInterface } from "@hooks/useLenguage";
import { CarouselFiltersInterface } from "./carouselFiltersa.interface";

export interface AppInitialState {
    filters: CarouselFiltersInterface[]
    lenguageState: AppLenguageInterface
}