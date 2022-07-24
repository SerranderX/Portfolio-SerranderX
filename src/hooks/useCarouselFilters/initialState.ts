import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { CarouselStateInterface } from "@interfaces/carouselFiltersa.interface";

export const initialState:CarouselStateInterface = {
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
};
