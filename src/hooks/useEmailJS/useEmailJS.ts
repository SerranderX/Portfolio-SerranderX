import { Reducer, useReducer, useRef, useState } from "react";
import { InputTypeNames } from "@hooks/useEmailJS/inputTypeNames";
import { ButtonProps } from "@interfaces/buttona.interface";
import { ActionTypes } from "@hooks/useEmailJS/actionTypes";
import { EmailJSInterface, EmailJSReducerInterface, EmailJSStateInterface } from "@interfaces/emailJS.interface";
import { reducer } from "@hooks/useEmailJS/reducer";
import { initialState } from "@hooks/useEmailJS/initialState";
import { InputTypes } from "@hooks/useEmailJS/InputTypes";

export const useEmailJS = (): EmailJSInterface => {
    const [state, dispatch] = useReducer<Reducer<EmailJSStateInterface, EmailJSReducerInterface>>(reducer, initialState);
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [changeEmailValidate, setChangeEmailValidate] = useState<boolean>(false);
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
    const changeValidEmail = (payload: string) => dispatch({ type: ActionTypes.CHANGE_VALID_EMAIL, payload: payload });

    //Action Handlers
    const handlerNameValue = (payload: string) => changeNameValue(payload);
    const handlerEmailValue = (payload: string) => changeEmailValue(payload);
    const handlerSubjectValue = (payload: string) => changeSubjectValue(payload);
    const handlerMessageValue = (payload: string) => changeMessageValue(payload);
    const handlerNameLabel = (payload: string) => changeNameLabel(payload);
    const handlerEmailLabel = (payload: string) => changeEmailLabel(payload);
    const handlerSubjectLabel = (payload: string) => changeSubjectLabel(payload);
    const handlerMessageLabel = (payload: string) => changeMessageLabel(payload);
    const handlerValidEmail = (payload: string) => {
        setChangeEmailValidate(true);
        changeValidEmail(payload);
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
                changeLabelValue: handlerEmailLabel,
                changeValidEmailState: handlerValidEmail
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
        emailValidateTrigger: {
            stateEmailValidate: changeEmailValidate,
            handlerEmailValidate: setChangeEmailValidate
        }
    };
}