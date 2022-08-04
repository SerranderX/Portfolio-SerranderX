import { ToolsTypes } from '@hooks/useCarouselFilters/ToolsTypes';
import { AppInitialState } from '@interfaces/appInitialStatea.interface';
import { createContext, SVGProps } from 'react';

const initialState: AppInitialState = {
    filters: [
        {
            name: ToolsTypes.REACTJS,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.ANGULAR,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.FRAMERMOTION,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.JAVASCRIPT,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.TYPESCRIPT,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.JAVA,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.NEXTJS,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.NODEJS,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.NESTJS,
            state: false,
            handleFilter: function(){}
        },{
            name: ToolsTypes.SPRING,
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