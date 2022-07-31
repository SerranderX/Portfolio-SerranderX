import React, { useContext } from 'react';
import styles from '@styles/AboutMe.module.scss';
import { AppContext } from '@context/AppContext';

export const AboutMe = () => {
    const { lenguageState: { lenguageSelectedData: {data: { aboutme }} } } = useContext(AppContext);

    return (
        <section className={styles.container} id="about">
            <article className={`${styles['title-container']}`}>
                <h1>{aboutme.title}</h1>
            </article>
            <article className={`${styles['general-container']}`}>
                <div className={`${styles['general-image-container']}`} style={{backgroundColor: 'purple'}}></div>
                <div className={`${styles['general-info-container']}`}>
                    <h2>{aboutme.general.title}</h2>
                    <p>{aboutme.general.description}</p>
                </div>
            </article>
            <article className={`${styles['hobbies-container']}`}>
                <div className={`${styles['hobbies-image-container']}`} style={{backgroundColor: 'purple'}}></div>
                <div className={`${styles['hobbies-info-container']}`}>
                    <h2>{aboutme.skills.title}</h2>
                    <p>{aboutme.skills.description}</p>
                </div>
            </article>
        </section>
    );
};