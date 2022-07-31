import React, {useContext, useState} from "react";
import { Button } from '@components/Button/Button'; 
import { ButtonProps } from '@interfaces/buttona.interface';
import { Input } from '@components/Input/Input';
import { InputProps } from '@interfaces/inputa.interface';
import styles from '@styles/Contact.module.scss';
import { AppContext } from "@context/AppContext";
import Image from "next/image";
import EmailSticker from '@images/news.png';

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { lenguageState: { lenguageSelectedData: { data: { contact }} } } = useContext(AppContext);

    const handleButton = () => {}

    const submitProps:ButtonProps = {
        text: contact.inputSubmit,
        handleButton
    }

    const nameINPProps:InputProps = {
        type: "text",
        name: "name",
        labelText: contact.inputName,
        value: name,
        handleValue: setName
    }

    const emailINPProps:InputProps = {
        type: "email",
        name: "email",
        labelText: contact.inputEmail,
        value: email,
        handleValue: setEmail
    }

    const subjectINPProps:InputProps = {
        type: "text",
        name: "subject",
        labelText: contact.inputSubject,
        value: subject,
        handleValue: setSubject,
    }

    const messageINPProps:InputProps = {
        type: "textarea",
        name: "message",
        labelText: contact.inputMessage,
        value: message,
        handleValue: setMessage,
        rows: 8,
        cols: 30
    }

    return (
        <section className={styles.container} id="contact">
            <h1 className={styles.title}>{contact.title}</h1>
            <article className={styles.content}>
                <Image src={EmailSticker} alt="" width={250} height={250}/>
                <p>{contact.description}</p>
            </article>
            <article className={styles.formContainer}>
                <form action="">
                    <Input {...nameINPProps}/>
                    <Input {...emailINPProps}/>
                    <Input {...subjectINPProps}/>
                    <Input {...messageINPProps}/>
                    <Button {...submitProps} />
                </form>
            </article>
        </section>
    );
};
