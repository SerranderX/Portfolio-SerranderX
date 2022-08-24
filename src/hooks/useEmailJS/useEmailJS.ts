import { Reducer, useReducer, useRef, useState } from "react";
import { InputTypeNames } from "@hooks/useEmailJS/inputTypeNames";
import { ButtonProps } from "@interfaces/buttona.interface";
import { ActionTypes } from "@hooks/useEmailJS/actionTypes";
import { EmailJSInterface, EmailJSReducerInterface, EmailJSStateInterface } from "@interfaces/emailJS.interface";
import { reducer } from "@hooks/useEmailJS/reducer";
import { initialState } from "@hooks/useEmailJS/initialState";
import { InputTypes } from "@hooks/useEmailJS/InputTypes";

const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
enum booleanString {
    TRUE = "true",
    FALSE = "false"
}

export const useEmailJS = (): EmailJSInterface => {
    const [state, dispatch] = useReducer<Reducer<EmailJSStateInterface, EmailJSReducerInterface>>(reducer, initialState);
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [inputValidateTrigger, setInputValidateTrigger] = useState<boolean>(false);
    const [submitProps, setSubmitProps] = useState<ButtonProps>({
        text: "",
        handleButton: (e: Event) => {
            e.preventDefault();
        }
    });

    const { nameINPProps, emailINPProps, subjectINPProps, messageINPProps } = state;

    //Action Creators
    const changeNameValue = (payload: string) => dispatch({ type: ActionTypes.CHANGE_NAME_VALUE, payload: payload });
    const changeEmailValue = (payload: string) => dispatch({ type: ActionTypes.CHANGE_EMAIL_VALUE, payload: payload });
    const changeSubjectValue = (payload: string) => dispatch({ type: ActionTypes.CHANGE_SUBJECT_VALUE, payload: payload });
    const changeMessageValue = (payload: string) => dispatch({ type: ActionTypes.CHANGE_MESSAGE_VALUE, payload: payload });
    const changeNameLabel = (payload: string) => dispatch({ type: ActionTypes.CHANGE_NAME_LABEL, payload: payload });
    const changeEmailLabel = (payload: string) => dispatch({ type: ActionTypes.CHANGE_EMAIL_LABEL, payload: payload });
    const changeSubjectLabel = (payload: string) => dispatch({ type: ActionTypes.CHANGE_SUBJECT_LABEL, payload: payload });
    const changeMessageLabel = (payload: string) => dispatch({ type: ActionTypes.CHANGE_MESSAGE_LABEL, payload: payload });
    const changeValidName = (payload: string) => dispatch({ type: ActionTypes.CHANGE_VALID_NAME, payload: payload });    
    const changeValidEmail = (payload: string) => dispatch({ type: ActionTypes.CHANGE_VALID_EMAIL, payload: payload });
    const changeValidSubject = (payload: string) => dispatch({ type: ActionTypes.CHANGE_VALID_SUBJECT, payload: payload });
    const changeValidMessage = (payload: string) => dispatch({ type: ActionTypes.CHANGE_VALID_MESSAGE, payload: payload });

    //Action Handlers
    const handlerNameLabel = (payload: string) => changeNameLabel(payload);
    const handlerEmailLabel = (payload: string) => changeEmailLabel(payload);
    const handlerSubjectLabel = (payload: string) => changeSubjectLabel(payload);
    const handlerMessageLabel = (payload: string) => changeMessageLabel(payload);
    const handlerNameValue = (payload: string) => {
        if(payload.length > 0 && !nameINPProps.valid) {
            changeValidName(booleanString.TRUE);
            setInputValidateTrigger(true);
        } else if (payload.length <= 0 && nameINPProps.valid) {
            changeValidName(booleanString.FALSE);
            setInputValidateTrigger(true);
        }
        changeNameValue(payload);
    }
    const handlerSubjectValue = (payload: string) => {
        if(payload.length > 0 && !subjectINPProps.valid) {
            changeValidSubject(booleanString.TRUE);
            setInputValidateTrigger(true);
        } else if (payload.length <= 0 && subjectINPProps.valid) {
            changeValidSubject(booleanString.FALSE);
            setInputValidateTrigger(true);
        }
        changeSubjectValue(payload);
    }
    const handlerMessageValue = (payload: string) => {
        if(payload.length > 0 && !messageINPProps.valid) {
            changeValidMessage(booleanString.TRUE);
            setInputValidateTrigger(true);
        } else if (payload.length <= 0 && messageINPProps.valid) {
            changeValidMessage(booleanString.FALSE);
            setInputValidateTrigger(true);
        }
        changeMessageValue(payload);
    }
    const handlerEmailValue = (payload: string) => {
        if(payload.match(validEmailRegex) && !emailINPProps.valid) {
            changeValidEmail(booleanString.TRUE);
            setInputValidateTrigger(true);
        } else if (!payload.match(validEmailRegex) && emailINPProps.valid) {
            changeValidEmail(booleanString.FALSE);
            setInputValidateTrigger(true);
        }
        changeEmailValue(payload);
    }

    return {
        inputs:[
            {
                type: InputTypeNames.NAME,
                name: InputTypes.nameINPProps,
                state: nameINPProps,
                changeValue: handlerNameValue,
                changeLabelValue: handlerNameLabel
            },
            {
                type: InputTypeNames.EMAIL,
                name: InputTypes.emailINPProps,
                state: emailINPProps,
                changeValue: handlerEmailValue,
                changeLabelValue: handlerEmailLabel
            },
            {
                type: InputTypeNames.SUBJECT,
                name: InputTypes.subjectINPProps,
                state: subjectINPProps,
                changeValue: handlerSubjectValue,
                changeLabelValue: handlerSubjectLabel
            },
            {
                type: InputTypeNames.MESSAGE,
                name: InputTypes.messageINPProps,
                state: messageINPProps,
                changeValue: handlerMessageValue,
                changeLabelValue: handlerMessageLabel
            }
        ],
        submitButton: {
            submitButton: submitProps,
            setSubmitProps
        },
        formRef: form,
        loading: {
            state: loading,
            handleLoading: setLoading
        },
        inputValidateTrigger: {
            inputValidateTrigger: inputValidateTrigger,
            handlerInputValidateTrigger: setInputValidateTrigger
        }
    };
}