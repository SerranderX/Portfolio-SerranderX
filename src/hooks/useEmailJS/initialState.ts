import { InputTypes } from "@hooks/useEmailJS/InputTypes";
import { EmailJSStateInterface } from "@interfaces/emailJS.interface";
import { InputTypeNames } from "@hooks/useEmailJS/inputTypeNames";

export const initialState: EmailJSStateInterface = {
    [InputTypes.nameINPProps]: {
        type: "text",
        name: InputTypes.nameINPProps,
        labelText: "",
        value: "",
    },
    [InputTypes.emailINPProps]: {
        type: "email",
        name: InputTypes.emailINPProps,
        labelText: "",
        value: "",
    },
    [InputTypes.subjectINPProps]: {
        type: "text",
        name: InputTypes.subjectINPProps,
        labelText: "",
        value: "",
    },
    [InputTypes.messageINPProps]: {
        type: "textarea",
        name: InputTypes.messageINPProps,
        labelText: "",
        value: "",
        rows: 8,
        cols: 30,
    },
};