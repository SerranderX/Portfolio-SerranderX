import React, { useContext, useEffect, useState } from 'react';
import styles from '@styles/Presentation.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Photo from '@images/photo1.jpg';
import { titleNameVariants } from '@containers/Presentation/animations';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { WindowSize } from '@interfaces/windowSize.interface';
import { AppContext } from '@context/AppContext';
import { AnimatedText } from '@components/AnimatedText/AnimatedText';

export const Presentation = () => {
    const name = ['Felipe Diaz', 'SerranderX'];
    const widnowsDimensions: WindowSize = useWindowsDimensions();
    const { lenguageState: { lenguageSelectedData: {data: { presentation }} } } = useContext(AppContext);

    return (
        <section className={`${styles['container-presentation']}`}>
            <article className={`${styles['title-container']}`}>
                {widnowsDimensions.winWidth > 1300 && <h3 style={{color: 'white', margin: ".6em 0 .6em .5em"}}>{presentation.title}</h3>}
                <h1 className={`${styles.title}`}>
                    {presentation.greeting1} <br/>
                    {presentation.greeting2} {' '}
                    <AnimatedText textData={name} />
                </h1>
                <p className={`${styles.description}`}>
                    {presentation.description}
                </p>
            </article>
            <motion.article 
                className={`${styles['photo-container']}`}
                animate={{ opacity: [0, 1], boxShadow: `0 0 5px rgba(8, 139, 204, .8), 0 0 25px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 100px rgba(8, 139, 204, .8)`}}
                transition={{ duration: 1, delay: .3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <Image src={Photo} alt="Picture of the author" width={450} height={600} className={styles.photo} />
            </motion.article>
        </section>
    );
};