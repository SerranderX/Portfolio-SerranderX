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
                header: {
                    navbar: {
                        about: "",
                        experience: "",
                        projects: "",
                        contact: ""
                    }
                },
                presentation: {
                    title: "",
                    greeting1: "",
                    greeting2: "",
                    description: ""
                },
                experience: {
                    title: "",
                    description: ""
                },
                projects: {
                    title: "",
                    description: ""
                },
                contact: {
                    title: "",
                    description: "",
                    inputName: "",
                    inputEmail: "",
                    inputSubject: "",
                    inputMessage: "",
                    inputSubmit: "",
                },
                aboutme: {
                    title: "",
                    general: {
                        title: "",
                        description: ""
                    },
                    skills: {
                        title: "",
                        description: ""
                    }
                },
                footer: {
                    navbar: {
                        about: "",
                        experience: "",
                        projects: "",
                        contact: "",
                    }
                },
            },
            flagIcon: (props: SVGProps<SVGSVGElement>) => { return <></> },
        },
        lenguageList: [
            {
                lenguage: "",
                lenguageName: "",
                data: {
                    header: {
                        navbar: {
                            about: "",
                            experience: "",
                            projects: "",
                            contact: ""
                        }
                    },
                    presentation: {
                        title: "",
                        greeting1: "",
                        greeting2: "",
                        description: ""
                    },
                    experience: {
                        title: "",
                        description: ""
                    },
                    projects: {
                        title: "",
                        description: ""
                    },
                    contact: {
                        title: "",
                        description: "",
                        inputName: "",
                        inputEmail: "",
                        inputSubject: "",
                        inputMessage: "",
                        inputSubmit: "",
                    },
                    aboutme: {
                        title: "",
                        general: {
                            title: "",
                            description: ""
                        },
                        skills: {
                            title: "",
                            description: ""
                        }
                    },
                    footer: {
                        navbar: {
                            about: "",
                            experience: "",
                            projects: "",
                            contact: "",
                        }
                    },
                },
                flagIcon: (props: SVGProps<SVGSVGElement>) => { return <></> },
            }
        ]
    }
}

export const AppContext = createContext(initialState);