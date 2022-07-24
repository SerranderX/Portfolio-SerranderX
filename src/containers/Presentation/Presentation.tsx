import React, { useEffect } from 'react';
import styles from '@styles/Presentation.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Photo from '@images/photo1.jpg';
import { titleNameVariants } from '@containers/Presentation/animations';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { WindowSize } from '@interfaces/WindowSize.interface';

export const Presentation = () => {
    const name = ['Felipe Diaz', 'SerranderX'];
    const [nameIndex, setNameIndex] = React.useState(0);
    const [state, setState] = React.useState(false);
    const [animationTimer, setAnimationTimer] = React.useState(false);
    const widnowsDimensions: WindowSize = useWindowsDimensions();

    useEffect(() => {
        if (!animationTimer) {
            if(!state){
                setTimeout(() => {
                    setState(true);
                    changeName();
                }, 2000);
            } else {
                setTimeout(() => {
                    setState(false);
                    changeName();
                }, 2000);
            }
        }
    }, [state, animationTimer]);

    const changeName = () => {
        setAnimationTimer(true);
        setTimeout(() => {
            setNameIndex(nameIndex === 0 ? 1 : 0);
            setState(false);
            setTimeout(() => {
                setAnimationTimer(false);
            }, 2000);
        }, 1000);
    }

    return (
        <section className={`${styles['container-presentation']}`}>
            <article className={`${styles['title-container']}`}>
                <h1 className={`${styles.title}`}>
                    Bienvenido, <br/>
                    mi nombre es {' '}
                    <motion.span
                        variants={titleNameVariants}
                        initial="enter"
                        animate={state ? 'exit' : 'enter'}
                        exit="exit"
                        transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className={styles.authorName}
                    >{name[nameIndex]}</motion.span>
                </h1>
                <p className={`${styles.description}`}>
                    This is a simple example of a Next.js App.
                    width: {widnowsDimensions.winWidth} height: {widnowsDimensions.winHeight}
                </p>
            </article>
            <article className={`${styles['photo-container']}`}>
                <Image src={Photo} alt="Picture of the author" width={480} height={480} className={styles.photo} />
            </article>
        </section>
    );
};