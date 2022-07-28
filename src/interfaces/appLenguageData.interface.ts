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

export interface AppHeaderData {}
export interface AppPresentationData {}
export interface AppExperienceData {}
export interface AppProjectsData {}
export interface AppContactData {}
export interface AppAboutmeData {}
export interface AppFooterData {}
