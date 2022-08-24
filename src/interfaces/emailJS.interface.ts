import { InputProps } from "@interfaces/inputa.interface";
import { ActionTypes } from "@hooks/useEmailJS/actionTypes";
import { InputTypes } from "@hooks/useEmailJS/InputTypes";
import { ButtonProps } from "./buttona.interface";
import { Dispatch, SetStateAction } from "react";

//State Interfaces
export interface EmailJSStateInterface {
    nameINPProps: InputProps;
    emailINPProps: InputProps;
    subjectINPProps: InputProps;
    messageINPProps: InputProps;
}

//Reducer Interfaces
export interface EmailJSReducerInterface {
    type: ActionTypes;
    payload: string;
}

export interface EmailJSReducerObjectInterface {
    [ActionTypes.CHANGE_NAME_VALUE]: EmailJSStateInterface;
    [ActionTypes.CHANGE_EMAIL_VALUE]: EmailJSStateInterface;
    [ActionTypes.CHANGE_SUBJECT_VALUE]: EmailJSStateInterface;
    [ActionTypes.CHANGE_MESSAGE_VALUE]: EmailJSStateInterface;
    [ActionTypes.CHANGE_NAME_LABEL]: EmailJSStateInterface;
    [ActionTypes.CHANGE_EMAIL_LABEL]: EmailJSStateInterface;
    [ActionTypes.CHANGE_SUBJECT_LABEL]: EmailJSStateInterface;
    [ActionTypes.CHANGE_MESSAGE_LABEL]: EmailJSStateInterface;
    [ActionTypes.CHANGE_VALID_EMAIL]: EmailJSStateInterface;
    
}

//EmailJS Interface - useEmailJS Hook
export interface EmailJSInputInterface {
    type: string;
    name: InputTypes,
    state: InputProps,
    changeValue: (payload: string) => void,
    changeLabelValue: (payload: string) => void
    changeValidEmailState?: (payload: string) => void
}

export interface EmailJSInterface {
    inputs: EmailJSInputInterface[];
    submitButton: {
        submitButton: ButtonProps,
        setSubmitProps: (payload: ButtonProps) => void
    };
    formRef: React.RefObject<HTMLFormElement> | null;
    loading: {
        state: boolean;
        handleLoading: (payload: boolean) => void;
    }
}