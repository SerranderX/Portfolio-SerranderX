import React from 'react';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import styles from '@styles/Proyects.module.scss';

export const Proyects = () => {
    return (
        <article className={styles.container}>
            <h1>Proyectos</h1>
            <section>
                <ul className={`${styles['proyects-container']}`}>
                    <div className={`${styles['buttom-slide']} ${styles['left']}`}>
                        <ArrowLeft />
                    </div>
                    {[1,2,3].map(num => 
                        <li key={num}>
                            <div className={`${styles['proyect-foto-conainer']}`}></div>
                            <div className={`${styles['proyect-info-container']}`}></div>
                            <div className={`${styles['proyect-button-container']}`}></div>
                        </li>
                    )}
                    <div className={`${styles['buttom-slide']} ${styles['right']}`}>
                        <ArrowRight />
                    </div>
                </ul>
            </section>
        </article>
    );
};