import { ToolsTypes } from "@hooks/useCarouselFilters/ToolsTypes";
import { InputTypes } from "@hooks/useEmailJS/InputTypes";
import { AppInitialState } from "@interfaces/appInitialStatea.interface";
import { ButtonProps } from "@interfaces/buttona.interface";
import { createContext, SVGProps } from "react";
import { InputTypeNames } from "@hooks/useEmailJS/inputTypeNames";

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
                    description: <></>,
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
                        description: <></>,
                    },
                    skills: {
                        title: "",
                        description: <></>,
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
                loadingMessage: "Cargando",
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
                        description: <></>,
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
                            description: <></>,
                        },
                        skills: {
                            title: "",
                            description: <></>,
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
                    loadingMessage: "Cargando",
                },
                flagIcon: (props: SVGProps<SVGSVGElement>) => {
                    return <></>;
                },
            },
        ],
    },
    emailJSState: {
        inputs:[
            {   
                type: InputTypeNames.NAME,
                name: InputTypes.nameINPProps,
                state: {
                    type: "text",
                    name: InputTypes.nameINPProps,
                    labelText: "",
                    value: "",
                },
                changeValue: (payload: string) => {},
                changeLabelValue: (payload: string) => {}
            },
            {
                type: InputTypeNames.EMAIL,
                name: InputTypes.emailINPProps,
                state: {
                    type: "email",
                    name: InputTypes.emailINPProps,
                    labelText: "",
                    value: "",
                },
                changeValue: (payload: string) => {},
                changeLabelValue: (payload: string) => {},
                changeValidEmailState: (payload: string) => {}
            },
            {
                type: InputTypeNames.SUBJECT,
                name: InputTypes.subjectINPProps,
                state: {
                    type: "text",
                    name: InputTypes.subjectINPProps,
                    labelText: "",
                    value: "",
                },
                changeValue: (payload: string) => {},
                changeLabelValue: (payload: string) => {}
            },
            {
                type: InputTypeNames.MESSAGE,
                name: InputTypes.messageINPProps,
                state: {
                    type: "textarea",
                    name: InputTypes.messageINPProps,
                    labelText: "",
                    value: "",
                    rows: 8,
                    cols: 30,
                },
                changeValue: (payload: string) => {},
                changeLabelValue: (payload: string) => {}
            }
        ],
        submitButton: {
            submitButton: {
                text: "",
                handleButton: (e: Event ) => {}
            },
            setSubmitProps: (payload: ButtonProps) => {},
        },
        formRef: null,
        loading: {
            state: false,
            handleLoading: (state: boolean) => {},
        }
    }
};

export const AppContext = createContext(initialState);
