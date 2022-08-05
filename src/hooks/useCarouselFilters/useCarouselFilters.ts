import React, { Reducer, useReducer } from "react";
import { initialState } from "@hooks/useCarouselFilters/initialState";
import { reducer } from "@hooks/useCarouselFilters/reducer";
import { CarouselStateInterface, ReducerStateInterface, CarouselFiltersInterface } from "@interfaces/carouselFiltersa.interface";
import { ActionTypes } from "@hooks/useCarouselFilters/actionTypes";
import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";

export const useCarouselFilters = (): CarouselFiltersInterface => {
    const [state, dispatch] = useReducer<Reducer<CarouselStateInterface, ReducerStateInterface>>(reducer, initialState);
    
    const { ReactJS, NextJS, NodeJS, NestJS, TypeScript, Spring, Java, JavaScript, FramerMotion, Angular, StyledComponents} = state;

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
    const actionStyledComponentsFilter = (payload: boolean) => dispatch({type: ActionTypes.SET_STYLED_COMPONENTS_FILTER, payload});

    //Action Handlers
    const handleReactFilter = () => actionReactFilter(!ReactJS);
    const handleAngularFilter = () => actionAngularFilter(!Angular);
    const handleFramerMotionFilter = () => actionFramerMotionFilter(!FramerMotion);
    const handleJavascriptFilter = () => actionJavascriptFilter(!JavaScript);
    const handleTypescriptFilter = () => actionTypescriptFilter(!TypeScript);
    const handleJavaFilter = () => actionJavaFilter(!Java);
    const handleNextFilter = () => actionNextFilter(!NextJS);
    const handleNodeFilter = () => actionNodeFilter(!NodeJS);
    const handleNestFilter = () => actionNestFilter(!NestJS);
    const handleSpringFilter = () => actionSpringFilter(!Spring);
    const handleStyledComponentsFilter = () => actionStyledComponentsFilter(!StyledComponents);

    const filters = [
        {
            name: ToolsTypes.REACTJS,
            state: ReactJS,
            handleFilter: handleReactFilter
        },
        {
            name: ToolsTypes.ANGULAR,
            state: Angular,
            handleFilter: handleAngularFilter
        },
        {
            name: ToolsTypes.FRAMERMOTION,
            state: FramerMotion,
            handleFilter: handleFramerMotionFilter
        },
        {
            name: ToolsTypes.JAVASCRIPT,
            state: JavaScript,
            handleFilter: handleJavascriptFilter
        },
        {
            name: ToolsTypes.TYPESCRIPT,
            state: TypeScript,
            handleFilter: handleTypescriptFilter
        },
        {
            name: ToolsTypes.JAVA,
            state: Java,
            handleFilter: handleJavaFilter
        },
        {
            name: ToolsTypes.NEXTJS,
            state: NextJS,
            handleFilter: handleNextFilter
        },
        {
            name: ToolsTypes.NODEJS,
            state: NodeJS,
            handleFilter: handleNodeFilter
        },
        {
            name: ToolsTypes.NESTJS,
            state: NestJS,
            handleFilter: handleNestFilter
        }, 
        {
            name: ToolsTypes.SPRING,
            state: Spring,
            handleFilter: handleSpringFilter
        },
        {
            name: ToolsTypes.STYLEDCOMPONENTS,
            state: StyledComponents,
            handleFilter: handleStyledComponentsFilter
        }
    ]

    const activeFiltresCount = filters.filter(filter => filter.state === true).length;

    return  {
        filters: filters,
        activeFiltersCount: activeFiltresCount
    };
}