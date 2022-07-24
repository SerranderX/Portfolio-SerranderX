import React, { Reducer, useReducer } from "react";
import { initialState } from "@hooks/useCarouselFilters/initialState";
import { reducer } from "@hooks/useCarouselFilters/reducer";
import { CarouselStateInterface, ReducerStateInterface, CarouselFiltersInterface } from "@interfaces/carouselFilters.interface";
import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";

export const useCarouselFilters = (): CarouselFiltersInterface => {
    const [state, dispatch] = useReducer<Reducer<CarouselStateInterface, ReducerStateInterface>>(reducer, initialState);
    
    const { Angular, FramerMotion, Java, JavaScript, Nest, Next, Node, React, Spring, TypeScript } = state;

    //Action Creators
    const actionReactFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_REACT_FILTER, payload});
    const actionAngularFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_ANGULAR_FILTER, payload});
    const actionFramerMotionFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_FRAMER_MOTION_FILTER, payload});
    const actionJavascriptFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_JAVASCRIPT_FILTER, payload});
    const actionTypescriptFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_TYPESCRIPT_FILTER, payload});
    const actionJavaFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_JAVA_FILTER, payload});
    const actionNextFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_NEXT_FILTER, payload});
    const actionNodeFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_NODE_FILTER, payload});
    const actionNestFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_NEST_FILTER, payload});
    const actionSpringFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_SPRING_FILTER, payload});

    //Action Handlers
    const handleReactFilter = () => actionReactFilter(!React);
    const handleAngularFilter = () => actionAngularFilter(!Angular);
    const handleFramerMotionFilter = () => actionFramerMotionFilter(!FramerMotion);
    const handleJavascriptFilter = () => actionJavascriptFilter(!JavaScript);
    const handleTypescriptFilter = () => actionTypescriptFilter(!TypeScript);
    const handleJavaFilter = () => actionJavaFilter(!Java);
    const handleNextFilter = () => actionNextFilter(!Next);
    const handleNodeFilter = () => actionNodeFilter(!Node);
    const handleNestFilter = () => actionNestFilter(!Nest);
    const handleSpringFilter = () => actionSpringFilter(!Spring);

    return {
        ...state,
        handleReactFilter,
        handleAngularFilter,
        handleFramerMotionFilter,
        handleJavascriptFilter,
        handleTypescriptFilter,
        handleJavaFilter,
        handleNextFilter,
        handleNodeFilter,
        handleNestFilter,
        handleSpringFilter
    };
}