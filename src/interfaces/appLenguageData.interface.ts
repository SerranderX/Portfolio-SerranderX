import { SVGProps } from "react";

export interface AppLenguageData {
    lenguage: string;
    lenguageName: string;
    data: AppData,
    flagIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
}

export interface AppData {
    header: AppHeaderData;
    presentation: AppPresentationData;
    experience: AppExperienceData;
    projects: AppProjectsData;
    contact: AppContactData;
    aboutme: AppAboutmeData;
    footer: AppFooterData;
}

export interface AppHeaderData {
    navbar: AppNavbarData;
}

export interface AppNavbarData {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    download?: string;
}

export interface AppPresentationData {
    title: string;
    greeting1: string;
    greeting2: string;
    description: string;
}


export interface AppExperienceData {
    title: string;
    description: string;
}
export interface AppProjectsData {
    title: string;
    description: string;
    notFoundMessage1: string;
    notFoundMessage2: string;
}
export interface AppContactData {
    title: string;
    description: string;
    inputName: string;
    inputEmail: string;
    inputSubject: string;
    inputMessage: string;
    inputSubmit: string;
}
export interface AppAboutmeData {
    title: string;
    general: {
        title: string;
        description: string;
    },
    skills: {
        title: string;
        description: string;
    }
}
export interface AppFooterData {
    navbar: AppNavbarData;
}
