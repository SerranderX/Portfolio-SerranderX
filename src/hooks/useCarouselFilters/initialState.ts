import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { CarouselStateInterface } from "@interfaces/carouselFiltersa.interface";

export const initialState:CarouselStateInterface = {
    [ToolsTypes.REACTJS]: false,
    [ToolsTypes.ANGULAR]: false,
    [ToolsTypes.FRAMERMOTION]: false,
    [ToolsTypes.JAVASCRIPT]: false,
    [ToolsTypes.TYPESCRIPT]: false,
    [ToolsTypes.JAVA]: false,
    [ToolsTypes.NEXTJS]: false,
    [ToolsTypes.NODEJS]: false,
    [ToolsTypes.NESTJS]: false,
    [ToolsTypes.SPRING]: false,
    [ToolsTypes.STYLEDCOMPONENTS]: false,
};
