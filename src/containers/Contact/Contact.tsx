import React, { useContext, useRef, useState } from "react";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { AppContext } from "@context/AppContext";
import { Loading } from "@components/Loading/Loading";
import styles from "@styles/Contact.module.scss";
import Image from "next/image";
import EmailSticker from "@images/news.png";

export const Contact = () => {
    const { lenguageState: { lenguageSelectedData: { data: { contact } } }, emailJSState } = useContext(AppContext);
    
    const { submitButton, formRef, inputs, loading } = emailJSState;

    return (
        <section className={styles.container} id="contact">
            <h1 className={styles.title}>{contact.title}</h1>
            <article className={styles.content}>
                <Image src={EmailSticker} alt="" width={250} height={250} />
                <p>{contact.description}</p>
            </article>
            <article className={styles.formContainer}>
                {!loading.state && (
                    <form ref={formRef} action="">
                        {inputs.map((input, index) => 
                            <Input key={input.type} {...input.state} handleValue={input.changeValue} />
                        )}
                        <Button {...submitButton.submitButton} /> 
                    </form>
                )}
                {loading.state && (
                    <Loading />
                )}
            </article>
        </section>
    );
};
