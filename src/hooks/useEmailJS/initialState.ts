import { InputTypes } from "@hooks/useEmailJS/InputTypes";
import { EmailJSStateInterface } from "@interfaces/emailJS.interface";

export const initialState: EmailJSStateInterface = {
    [InputTypes.nameINPProps]: {
        type: "text",
        name: InputTypes.nameINPProps,
        labelText: "",
        value: "",
        valid: false
    },
    [InputTypes.emailINPProps]: {
        type: "email",
        name: InputTypes.emailINPProps,
        labelText: "",
        value: "",
        valid: false
    },
    [InputTypes.subjectINPProps]: {
        type: "text",
        name: InputTypes.subjectINPProps,
        labelText: "",
        value: "",
        valid: false
    },
    [InputTypes.messageINPProps]: {
        type: "textarea",
        name: InputTypes.messageINPProps,
        labelText: "",
        value: "",
        rows: 8,
        cols: 30,
        valid: false
    },
};