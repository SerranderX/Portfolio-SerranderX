import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { CarouselStateInterface, ReducerStateInterface, ReducerObjectInterface } from "@interfaces/carouselFiltersa.interface";
import { Reducer } from "react";

const reducerObject = (state:CarouselStateInterface, payload: boolean): ReducerObjectInterface => ({
    [ActionTypes.SET_REACT_FILTER]: {...state, [ToolsTypes.REACTJS]: payload},
    [ActionTypes.SET_ANGULAR_FILTER]: {...state, [ToolsTypes.ANGULAR]: payload},
    [ActionTypes.SET_FRAMER_MOTION_FILTER]: {...state, [ToolsTypes.FRAMERMOTION]: payload},
    [ActionTypes.SET_JAVASCRIPT_FILTER]: {...state, [ToolsTypes.JAVASCRIPT]: payload},
    [ActionTypes.SET_TYPESCRIPT_FILTER]: {...state, [ToolsTypes.TYPESCRIPT]: payload},
    [ActionTypes.SET_JAVA_FILTER]: {...state, [ToolsTypes.JAVA]: payload},
    [ActionTypes.SET_NEXT_FILTER]: {...state, [ToolsTypes.NEXTJS]: payload},
    [ActionTypes.SET_NODE_FILTER]: {...state, [ToolsTypes.NODEJS]: payload},
    [ActionTypes.SET_NEST_FILTER]: {...state, [ToolsTypes.NESTJS]: payload},
    [ActionTypes.SET_SPRING_FILTER]: {...state, [ToolsTypes.SPRING]: payload},
    [ActionTypes.SET_STYLED_COMPONENTS_FILTER]: {...state, [ToolsTypes.STYLEDCOMPONENTS]: payload},
})

export const reducer: Reducer<CarouselStateInterface, ReducerStateInterface> = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state
}