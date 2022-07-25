import {ToolsTypes} from "@hooks/useCarouselFilters/ToolsTypes";
import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";

//State Interfaces
export interface CarouselStateInterface {
    [ToolsTypes.react]: boolean;
    [ToolsTypes.angular]: boolean;
    [ToolsTypes.framerMotion]: boolean;
    [ToolsTypes.javascript]: boolean;
    [ToolsTypes.typescript]: boolean;
    [ToolsTypes.java]: boolean;
    [ToolsTypes.next]: boolean;
    [ToolsTypes.node]: boolean;
    [ToolsTypes.nest]: boolean;
    [ToolsTypes.spring]: boolean;
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
}

//Carousel Filter Interface - useCarouselFilters
export interface CarouselFiltersInterface {
    name: string,
    state: boolean,
    handleFilter: () => void
}