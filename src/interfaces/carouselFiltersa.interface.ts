import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";

//State Interfaces
export interface CarouselStateInterface {
    [ToolsTypes.REACTJS]: boolean;
    [ToolsTypes.ANGULAR]: boolean;
    [ToolsTypes.FRAMERMOTION]: boolean;
    [ToolsTypes.JAVASCRIPT]: boolean;
    [ToolsTypes.TYPESCRIPT]: boolean;
    [ToolsTypes.JAVA]: boolean;
    [ToolsTypes.NEXTJS]: boolean;
    [ToolsTypes.NODEJS]: boolean;
    [ToolsTypes.NESTJS]: boolean;
    [ToolsTypes.SPRING]: boolean;
    [ToolsTypes.STYLEDCOMPONENTS]: boolean;
}

//Reducer Interfaces
export interface ReducerStateInterface {
    type: ActionTypes;
    payload: boolean;
}

export interface ReducerObjectInterface {
    [ActionTypes.SET_REACT_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_ANGULAR_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_FRAMER_MOTION_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_JAVASCRIPT_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_TYPESCRIPT_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_JAVA_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_NEXT_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_NODE_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_NEST_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_SPRING_FILTER]: CarouselStateInterface;
    [ActionTypes.SET_STYLED_COMPONENTS_FILTER]: CarouselStateInterface;
}

//Carousel Filter Interface - useCarouselFilters
export interface CarouselFilterInterface {
    name: ToolsTypes,
    state: boolean,
    handleFilter: () => void
}

export interface CarouselFiltersInterface {
    filters: CarouselFilterInterface[];
    activeFiltersCount: number;
}