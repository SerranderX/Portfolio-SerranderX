import { CarouselFiltersInterface } from "@interfaces/carouselFiltersa.interface";
import { useCarouselFilters } from "./useCarouselFilters/useCarouselFilters";
import { AppInitialState } from "@interfaces/appInitialStatea.interface";
import { AppLenguageInterface, useLenguage } from "@hooks/useLenguage";
import { EmailJSInterface } from "@interfaces/emailJS.interface";
import { useEmailJS } from "./useEmailJS/useEmailJS";
import { InputTypeNames } from "@hooks/useEmailJS/inputTypeNames";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ENV } from "@config/config";
import { useAlert, AlertInterface } from "@hooks/useAlert";

export const useAppInitialState = (): AppInitialState => {
    const projectsFilters: CarouselFiltersInterface = useCarouselFilters();
    const lenguageState: AppLenguageInterface = useLenguage();
    const emailJSState: EmailJSInterface = useEmailJS();
    const alertState:AlertInterface = useAlert();

    const [lenguageSel, setLenguageSel] = useState("");
    const { inputs, submitButton, formRef, loading, inputValidateTrigger } =
        emailJSState;
    const {
        lenguageSelectedData: {
            data: { contact, alertContent },
        },
        lenguageSelected,
    } = lenguageState;

    useEffect(() => {
        if (lenguageSel !== lenguageSelected) {
            inputs.forEach((input) => {
                switch (input.type) {
                    case InputTypeNames.NAME:
                        input.changeLabelValue(contact.inputName);
                        break;
                    case InputTypeNames.EMAIL:
                        input.changeLabelValue(contact.inputEmail);
                        break;
                    case InputTypeNames.SUBJECT:
                        input.changeLabelValue(contact.inputSubject);
                        break;
                    case InputTypeNames.MESSAGE:
                        input.changeLabelValue(contact.inputMessage);
                        break;
                    default:
                        break;
                }
            });
            
            submitButton.setSubmitProps({
                text: contact.inputSubmit,
                handleButton: (e: Event) => {
                    e.preventDefault();

                    let alertText = contact.inputMessages.title;
                    let showAlert = false;

                    inputs.forEach((input) => {
                        if (input.type === InputTypeNames.EMAIL && !input.state.valid) {
                            showAlert = true;
                            alertText += contact.inputMessages.email;
                            return;
                        }

                        if (input.state.value.length == 0 && input.type !== InputTypeNames.EMAIL) {
                            showAlert = true;
                            switch(input.type){
                                case InputTypeNames.SUBJECT:
                                    alertText += contact.inputMessages.subject;
                                    break;
                                case InputTypeNames.NAME:
                                    alertText += contact.inputMessages.name;
                                    break;
                                case InputTypeNames.MESSAGE:
                                    alertText += contact.inputMessages.message;
                                    break;
                                default:
                                    break;
                            }
                        }
                    });

                    if (!showAlert) {
                        if (formRef && contact) {
                            const { current } = formRef;

                            if (current) {
                                loading.handleLoading(true);
                                emailjs
                                    .sendForm(
                                        ENV.emailJSData.emailjs_service,
                                        ENV.emailJSData.emailjs_template,
                                        current,
                                        ENV.emailJSData.publicKey
                                    )
                                    .then(
                                        (result) => {
                                            if (result.text === "OK") {
                                                inputs.forEach((input) => {
                                                    input.changeValue("");
                                                });
                                                alertState.showAlert( alertContent.alertTitleType.success, contact.emailMessages.success, true);
                                            } else {
                                                alertState.showAlert( alertContent.alertTitleType.error, contact.emailMessages.error, true);
                                            }
                                            loading.handleLoading(false);
                                        },
                                        (error) => {
                                            alertState.showAlert( alertContent.alertTitleType.error, contact.emailMessages.error, true);
                                            loading.handleLoading(false);
                                        }
                                    );
                            }
                        }
                    } else {
                        alertState.showAlert(alertContent.alertTitleType.warning, alertText, true);
                    }
                },
            });
            setLenguageSel(lenguageSelected);
        }

        if (inputValidateTrigger.inputValidateTrigger) {
            submitButton.setSubmitProps({
                ...submitButton.submitButton,
                handleButton: (e: Event) => {
                    e.preventDefault();

                    let alertText = contact.inputMessages.title;
                    let showAlert = false;

                    inputs.forEach((input) => {
                        if (input.type === InputTypeNames.EMAIL && !input.state.valid) {
                            showAlert = true;
                            alertText += contact.inputMessages.email;
                            return;
                        }

                        if (input.state.value.length == 0 && input.type !== InputTypeNames.EMAIL) {
                            showAlert = true;
                            switch(input.type){
                                case InputTypeNames.SUBJECT:
                                    alertText += contact.inputMessages.subject;
                                    break;
                                case InputTypeNames.NAME:
                                    alertText += contact.inputMessages.name;
                                    break;
                                case InputTypeNames.MESSAGE:
                                    alertText += contact.inputMessages.message;
                                    break;
                                default:
                                    break;
                            }
                        }
                    });

                    if (!showAlert) {
                        if (formRef && contact) {
                            const { current } = formRef;

                            if (current) {
                                loading.handleLoading(true);
                                emailjs
                                    .sendForm(
                                        ENV.emailJSData.emailjs_service,
                                        ENV.emailJSData.emailjs_template,
                                        current,
                                        ENV.emailJSData.publicKey
                                    )
                                    .then(
                                        (result) => {
                                            if (result.text === "OK") {
                                                inputs.forEach((input) => {
                                                    input.changeValue("");
                                                });
                                                alertState.showAlert( alertContent.alertTitleType.success, contact.emailMessages.success, true);
                                            } else {
                                                alertState.showAlert( alertContent.alertTitleType.error, contact.emailMessages.error, true);
                                            }
                                            loading.handleLoading(false);
                                        },
                                        (error) => {
                                            alertState.showAlert( alertContent.alertTitleType.error, contact.emailMessages.error, true);
                                            loading.handleLoading(false);
                                        }
                                    );
                            }
                        }
                    } else {
                        alertState.showAlert(alertContent.alertTitleType.warning, alertText, true);
                    }
                },
            });
            inputValidateTrigger.handlerInputValidateTrigger(false);
        }
    }, [formRef, lenguageState.lenguageSelectedData, inputValidateTrigger.inputValidateTrigger]);


    return {
        projectsFilters,
        lenguageState,
        emailJSState,
        alertState
    };
};
