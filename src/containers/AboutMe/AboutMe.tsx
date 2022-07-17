import React from 'react';
import styles from '@styles/AboutMe.module.scss';

export const AboutMe = () => {
    return (
        <section className={styles.container}>
            <article className={`${styles['title-container']}`}>
                <h1>About Me</h1>
            </article>
            <article className={`${styles['general-container']}`}>
                <div className={`${styles['general-image-container']}`} style={{backgroundColor: 'purple'}}></div>
                <div className={`${styles['general-info-container']}`}>
                    <h2>General</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur harum? Cumque, dignissimos explicabo adipisci doloribus, reprehenderit, porro repellendus voluptates soluta tempora veritatis aliquam sunt? Cum soluta adipisci ipsam harum?</p>
                </div>
            </article>
            <article className={`${styles['hobbies-container']}`}>
                <div className={`${styles['hobbies-image-container']}`} style={{backgroundColor: 'purple'}}></div>
                <div className={`${styles['hobbies-info-container']}`}>
                    <h2>Hobbies</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur harum? Cumque, dignissimos explicabo adipisci doloribus, reprehenderit, porro repellendus voluptates soluta tempora veritatis aliquam sunt? Cum soluta adipisci ipsam harum?</p>
                </div>
            </article>
        </section>
    );
};