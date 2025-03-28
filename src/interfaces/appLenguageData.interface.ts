import { ReactElement, SVGProps } from "react";
import { TimelineEntry } from "./timelineEntries.interface";

export interface AppLenguageData {
    lenguage: string;
    lenguageName: string;
    data: AppData;
    flagIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface AppData {
    header: AppHeaderData;
    presentation: AppPresentationData;
    experience: AppExperienceData;
    timeline: AppTimelineData;
    projects: AppProjectsData;
    contact: AppContactData;
    aboutme: AppAboutmeData;
    footer: AppFooterData;
    loadingMessage: string;
    alertContent: AlertContentData;
}

export interface AppHeaderData {
    navbar: AppNavbarData;
    resumeModal: AppResumeModal;
}

export interface AppNavbarData {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    download?: string;
    cvhref: string;
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

export interface AppTimelineData {
    title: string;
    description: string;
    workHistory: TimelineEntry[];
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
    emailMessages: {
        success: string;
        error: string;
    };
    inputMessages: {
        title: string;
        name: string;
        email: string;
        subject: string;
        message: string;
    };
}
export interface AppAboutmeData {
    title: string;
    general: {
        title: string;
        description: string;
    };
    skills: {
        title: string;
        description: string;
    };
}
export interface AppFooterData {
    navbar: AppNavbarData;
}

export interface AlertContentData {
    closeButton: string;
    alertTitleType: {
        warning: string;
        error: string;
        success: string;
    };
}

export interface AppResumeModal {
    instruction: string;
    lenguages: AppResumeLenguagesModal;
}

export interface AppResumeLenguagesModal {
    english: string;
    spanish: string;
}
