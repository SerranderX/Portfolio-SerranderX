import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { AppInitialState } from "@interfaces/appInitialStatea.interface";
import { createContext, SVGProps } from "react";

const initialState: AppInitialState = {
    projectsFilters: {
        filters: [
            {
                name: ToolsTypes.REACTJS,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.ANGULAR,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.FRAMERMOTION,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.JAVASCRIPT,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.TYPESCRIPT,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.JAVA,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.NEXTJS,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.NODEJS,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.NESTJS,
                state: false,
                handleFilter: function () {},
            },
            {
                name: ToolsTypes.SPRING,
                state: false,
                handleFilter: function () {},
            },
        ],
        activeFiltersCount: 0,
    },
    lenguageState: {
        lenguageSelected: "",
        changeLenguageSelected: (lenguage: string) => {},
        lenguageSelectedData: {
            lenguage: "",
            lenguageName: "",
            data: {
                header: {
                    navbar: {
                        about: "",
                        experience: "",
                        projects: "",
                        contact: "",
                        download: "",
                    },
                },
                presentation: {
                    title: "",
                    greeting1: "",
                    greeting2: "",
                    description: "",
                },
                experience: {
                    title: "",
                    description: "",
                },
                projects: {
                    title: "",
                    description: "",
                    notFoundMessage1: "",
                    notFoundMessage2: "",
                },
                contact: {
                    title: "",
                    description: "",
                    inputName: "",
                    inputEmail: "",
                    inputSubject: "",
                    inputMessage: "",
                    inputSubmit: "",
                    emailMessages: {
                        success: "",
                        error: "",
                    }
                },
                aboutme: {
                    title: "",
                    general: {
                        title: "",
                        description: "",
                    },
                    skills: {
                        title: "",
                        description: "",
                    },
                },
                footer: {
                    navbar: {
                        about: "",
                        experience: "",
                        projects: "",
                        contact: "",
                    },
                },
            },
            flagIcon: (props: SVGProps<SVGSVGElement>) => {
                return <></>;
            },
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
                            contact: "",
                            download: "",
                        },
                    },
                    presentation: {
                        title: "",
                        greeting1: "",
                        greeting2: "",
                        description: "",
                    },
                    experience: {
                        title: "",
                        description: "",
                    },
                    projects: {
                        title: "",
                        description: "",
                        notFoundMessage1: "",
                        notFoundMessage2: "",
                    },
                    contact: {
                        title: "",
                        description: "",
                        inputName: "",
                        inputEmail: "",
                        inputSubject: "",
                        inputMessage: "",
                        inputSubmit: "",
                        emailMessages: {
                            success: "",
                            error: "",
                        }
                    },
                    aboutme: {
                        title: "",
                        general: {
                            title: "",
                            description: "",
                        },
                        skills: {
                            title: "",
                            description: "",
                        },
                    },
                    footer: {
                        navbar: {
                            about: "",
                            experience: "",
                            projects: "",
                            contact: "",
                        },
                    },
                },
                flagIcon: (props: SVGProps<SVGSVGElement>) => {
                    return <></>;
                },
            },
        ],
    },
};

export const AppContext = createContext(initialState);
