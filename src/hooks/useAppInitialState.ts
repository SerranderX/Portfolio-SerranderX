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

export const useAppInitialState = (): AppInitialState => {
    const projectsFilters: CarouselFiltersInterface = useCarouselFilters();
    const lenguageState: AppLenguageInterface = useLenguage();
    const emailJSState: EmailJSInterface = useEmailJS();

    const [lenguageSel, setLenguageSel] = useState("");
    const { inputs, submitButton, formRef, loading } = emailJSState;
    const {
        lenguageSelectedData: {
            data: { contact },
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
                    
                    if (formRef && contact) {
                        const { current } = formRef;
                        
                        if (current) {
                            loading.handleLoading(true);
                            emailjs.sendForm(ENV.emailJSData.emailjs_service, ENV.emailJSData.emailjs_template, current, ENV.emailJSData.publicKey)
                                .then((result) => {
                                        if (result.text === "OK") {
                                            inputs.forEach((input) => {
                                                input.changeValue("");
                                            });
                                            alert(
                                                contact.emailMessages.success
                                            );
                                        } else {
                                            alert(contact.emailMessages.error);
                                        }
                                        loading.handleLoading(false);
                                },(error) => {
                                        alert(contact.emailMessages.error);
                                        loading.handleLoading(false);
                                });
                        }
                    }
                },
            });

            setLenguageSel(lenguageSelected);
        }
    }, [formRef, lenguageState.lenguageSelectedData]);

    return {
        projectsFilters,
        lenguageState,
        emailJSState,
    };
};
