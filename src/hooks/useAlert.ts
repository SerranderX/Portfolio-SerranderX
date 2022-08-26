import { useState } from 'react';

export interface AlertInterface {
    modalState: boolean
    title: string
    message: string
    showAlert: (title:string, message:string, state:boolean) => void
    closeAlert: () => void
}

export const useAlert = (): AlertInterface => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const showAlert = (title:string, message:string, state:boolean) => {
        setModalState(state);
        setTitle(title);
        setMessage(message);
    }

    const closeAlert = () => {
        setModalState(false);
        setTitle("");
        setMessage("");
    }

    return {
        modalState,
        title,
        message,
        showAlert,
        closeAlert
    }
}