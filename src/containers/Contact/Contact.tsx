import React, {useState} from "react";
import { Button } from "@components/Button/Button"; 
import { ButtonProps } from "@interfaces/Button.interface";
import { Input } from "@components/Input/Input";
import { InputProps } from "@interfaces/Input.interface";
import styles from "@styles/Contact.module.scss";

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleButton = () => {}

    const submitProps:ButtonProps = {
        text: "Enviar",
        handleButton
    }

    const nameINPProps:InputProps = {
        type: "text",
        name: "name",
        labelText: "Nombre",
        value: name,
        handleValue: setName
    }

    const emailINPProps:InputProps = {
        type: "email",
        name: "email",
        labelText: "Email",
        value: email,
        handleValue: setEmail
    }

    const subjectINPProps:InputProps = {
        type: "text",
        name: "subject",
        labelText: "Asunto",
        value: subject,
        handleValue: setSubject,
    }

    const messageINPProps:InputProps = {
        type: "textarea",
        name: "message",
        labelText: "Mensaje",
        value: message,
        handleValue: setMessage,
        rows: 8,
        cols: 30
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Contact me</h1>
            <article className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum doloribus nam doloremque itaque pariatur delectus nihil, sed consectetur eveniet vero inventore soluta placeat, quis sit nesciunt cupiditate. Nobis, aspernatur!</p>
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
