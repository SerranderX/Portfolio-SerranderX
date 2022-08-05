import React, { useContext } from 'react';
import styles from '@styles/AboutMe.module.scss';
import { AppContext } from '@context/AppContext';
import { motion } from 'framer-motion';
import imageGeneralSection from '@images/photo2.jpg';
import Image from 'next/image';

export const AboutMe = () => {
    const { lenguageState: { lenguageSelectedData: {data: { aboutme }} } } = useContext(AppContext);

    return (
        <section className={styles.container} id="about">
            <article className={`${styles['title-container']}`}>
                <h1>{aboutme.title}</h1>
            </article>
            <article className={`${styles['general-container']}`}>
                <motion.div
                    animate={{ opacity: [0, 1], boxShadow: `0 0 5px rgba(8, 139, 204, .8), 0 0 25px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 100px rgba(8, 139, 204, .8)`}}
                    transition={{ duration: 1, delay: .3, ease: [0.04, 0.62, 0.23, 0.98] }} 
                    className={`${styles['general-image-container']}`}
                >
                    <Image style={{borderRadius: '50px'}} src={imageGeneralSection} alt="General Section - Picture of the author" width={500} height={500} />
                </motion.div>
                <div className={`${styles['general-info-container']}`}>
                    <h2>{aboutme.general.title}</h2>
                    <p>{aboutme.general.description}</p>
                </div>
            </article>
            <article className={`${styles['hobbies-container']}`}>
                <div className={`${styles['hobbies-image-container']}`} style={{backgroundColor: 'purple'}}>
                    
                </div>
                <div className={`${styles['hobbies-info-container']}`}>
                    <h2>{aboutme.skills.title}</h2>
                    <p>{aboutme.skills.description}</p>
                </div>
            </article>
        </section>
    );
};