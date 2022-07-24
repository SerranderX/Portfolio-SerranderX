import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { CarouselStateInterface, ReducerStateInterface, ReducerObjectInterface } from "@interfaces/carouselFilters.interface";
import { Reducer } from "react";

const reducerObject = (state:CarouselStateInterface, payload: boolean): ReducerObjectInterface => ({
    [ActionTypes.SET_REACT_FILTER]: {...state, [ToolsTypes.react]: payload},
    [ActionTypes.SET_ANGULAR_FILTER]: {...state, [ToolsTypes.angular]: payload},
    [ActionTypes.SET_FRAMER_MOTION_FILTER]: {...state, [ToolsTypes.framerMotion]: payload},
    [ActionTypes.SET_JAVASCRIPT_FILTER]: {...state, [ToolsTypes.javascript]: payload},
    [ActionTypes.SET_TYPESCRIPT_FILTER]: {...state, [ToolsTypes.typescript]: payload},
    [ActionTypes.SET_JAVA_FILTER]: {...state, [ToolsTypes.java]: payload},
    [ActionTypes.SET_NEXT_FILTER]: {...state, [ToolsTypes.next]: payload},
    [ActionTypes.SET_NODE_FILTER]: {...state, [ToolsTypes.node]: payload},
    [ActionTypes.SET_NEST_FILTER]: {...state, [ToolsTypes.nest]: payload},
    [ActionTypes.SET_SPRING_FILTER]: {...state, [ToolsTypes.spring]: payload},
})

export const reducer: Reducer<CarouselStateInterface, ReducerStateInterface> = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state
}