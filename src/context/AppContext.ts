import { ToolsTypes } from '@hooks/useCarouselFilters/ToolsTypes';
import { AppInitialState } from '@interfaces/appInitialState.interface';
import { createContext } from 'react';

const initialState: AppInitialState = {
    [ToolsTypes.react]: false,
    [ToolsTypes.angular]: false,
    [ToolsTypes.framerMotion]: false,
    [ToolsTypes.javascript]: false,
    [ToolsTypes.typescript]: false,
    [ToolsTypes.java]: false,
    [ToolsTypes.next]: false,
    [ToolsTypes.node]: false,
    [ToolsTypes.nest]: false,
    [ToolsTypes.spring]: false,
    // Actions
    handleReactFilter: () => {},
    handleAngularFilter: () => {},
    handleFramerMotionFilter: () => {},
    handleJavascriptFilter: () => {},
    handleTypescriptFilter: () => {},
    handleJavaFilter: () => {},
    handleNextFilter: () => {},
    handleNodeFilter: () => {},
    handleNestFilter: () => {},
    handleSpringFilter: () => {}
}

export const AppContext = createContext(initialState);