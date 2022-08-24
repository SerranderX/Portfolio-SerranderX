import { Reducer } from "react";
import { EmailJSStateInterface, EmailJSReducerObjectInterface, EmailJSReducerInterface } from "@interfaces/emailJS.interface";
import { InputTypes } from "@hooks/useEmailJS/InputTypes";
import { ActionTypes } from "@hooks/useEmailJS/actionTypes";

const reducerObject = (state:EmailJSStateInterface, payload: string): EmailJSReducerObjectInterface => ({
    [ActionTypes.CHANGE_NAME_VALUE]: { ...state, [InputTypes.nameINPProps]: { ...state[InputTypes.nameINPProps], value: payload } },
    [ActionTypes.CHANGE_EMAIL_VALUE]: { ...state, [InputTypes.emailINPProps]: { ...state[InputTypes.emailINPProps], value: payload } },
    [ActionTypes.CHANGE_SUBJECT_VALUE]: { ...state, [InputTypes.subjectINPProps]: { ...state[InputTypes.subjectINPProps], value: payload } },
    [ActionTypes.CHANGE_MESSAGE_VALUE]: { ...state, [InputTypes.messageINPProps]: { ...state[InputTypes.messageINPProps], value: payload } },
    [ActionTypes.CHANGE_NAME_LABEL]: { ...state, [InputTypes.nameINPProps]: { ...state[InputTypes.nameINPProps], labelText: payload } },
    [ActionTypes.CHANGE_EMAIL_LABEL]: { ...state, [InputTypes.emailINPProps]: { ...state[InputTypes.emailINPProps], labelText: payload } },
    [ActionTypes.CHANGE_SUBJECT_LABEL]: { ...state, [InputTypes.subjectINPProps]: { ...state[InputTypes.subjectINPProps], labelText: payload } },
    [ActionTypes.CHANGE_MESSAGE_LABEL]: { ...state, [InputTypes.messageINPProps]: { ...state[InputTypes.messageINPProps], labelText: payload } },
    [ActionTypes.CHANGE_VALID_EMAIL]: { ...state, [InputTypes.emailINPProps]: { ...state[InputTypes.emailINPProps], validEmail: (payload === 'true') ? true : false } }
})

export const reducer: Reducer<EmailJSStateInterface, EmailJSReducerInterface> = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state
}