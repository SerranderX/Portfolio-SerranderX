import { ToolsTypes } from '@hooks/useCarouselFilters/ToolsTypes';
import { AppInitialState } from '@interfaces/appInitialStatea.interface';
import { createContext, SVGProps } from 'react';

const initialState: AppInitialState = {
    filters: [
        {
            name: ToolsTypes.react,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.angular,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.framerMotion,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.javascript,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.typescript,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.java,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.next,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.node,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.nest,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.spring,
            state: false,
            handleFilter: function(){}
        }
    ],
    lenguageState: {
        lenguageSelected: "",
        changeLenguageSelected: (lenguage:string) => {},
        lenguageSelectedData: {
            lenguage: "",
            lenguageName: "",
            data: {
                header: {},
                presentation: {},
                experience: {},
                projects: {},
                contact: {},
                aboutme: {},
                footer: {},
            },
            flagIcon: (props: SVGProps<SVGSVGElement>) => { return <></> },
        },
        lenguageList: [
            {
                lenguage: "",
                lenguageName: "",
                data: {
                    header: {},
                    presentation: {},
                    experience: {},
                    projects: {},
                    contact: {},
                    aboutme: {},
                    footer: {},
                },
                flagIcon: (props: SVGProps<SVGSVGElement>) => { return <></> },
            }
        ]
    }
}

export const AppContext = createContext(initialState);