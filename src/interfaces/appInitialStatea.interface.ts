import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";

export interface AppInitialState {
    // CarouselFiltersInterface
    // States
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
    // Actions
    handleReactFilter: () => void;
    handleAngularFilter: () => void;
    handleFramerMotionFilter: () => void;
    handleJavascriptFilter: () => void;
    handleTypescriptFilter: () => void;
    handleJavaFilter: () => void;
    handleNextFilter: () => void;
    handleNodeFilter: () => void;
    handleNestFilter: () => void;
    handleSpringFilter: () => void;
}