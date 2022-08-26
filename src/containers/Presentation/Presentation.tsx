import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Photo from '@images/photo1.jpg';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { WindowSize } from '@interfaces/windowSize.interface';
import { AppContext } from '@context/AppContext';
import { AnimatedText } from '@components/AnimatedText/AnimatedText';
import { SocialSection } from '@components/SocialSection/SocialSection';
import { replaceWithBr } from "@utils/Utils";
import styles from '@styles/Presentation.module.scss';

interface PresentationProps {
    windowDimenions:WindowSize
}

export const Presentation: React.FC<PresentationProps> = ({windowDimenions}) => {
    const name = ['Felipe Diaz', 'SerranderX'];
    const widnowsDimensions: WindowSize = useWindowsDimensions();
    const { lenguageState: { lenguageSelectedData: {data: { presentation }} } } = useContext(AppContext);
    const [ imageSize, setImageSize ] = useState({width: 0, height: 0});

    useEffect(() => {
        if(windowDimenions.winWidth > 1200 ){
            setImageSize({width: 370, height: 500});
        } else {
            setImageSize({width: 470, height: 600});
        }
    }, [windowDimenions]);

    return (
        <section className={`${styles['container-presentation']}`}>
            <article className={`${styles['title-container']}`}>
                {widnowsDimensions.winWidth > 1300 && <h3 style={{color: 'white', margin: ".6em 0 .6em .5em"}}>{presentation.title}</h3>}
                <h1 className={`${styles.title}`}>
                    {presentation.greeting1} <br/>
                    {presentation.greeting2} {' '}
                    <AnimatedText textData={name} />
                </h1>
                <p className={`${styles.description}`} dangerouslySetInnerHTML={{__html: replaceWithBr(presentation.description)}} />
                <div className={`${styles.socialContainer}`}>
                    <SocialSection containerClass={styles.socialSectionContainer} svgClass={`${styles['svgClass-presentation']}`} iconContainerClass={styles.containerIcon} />
                </div>
            </article>
            <article className={`${styles['photo-container']}`}>
                <motion.div
                    style={{borderRadius: '50px', display: 'flex'}}
                    animate={{ 
                        opacity: [0, 1],
                        boxShadow: `0 0 5px rgba(8, 139, 204, .8), 0 0 25px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 100px rgba(8, 139, 204, .8)`}}
                    transition={{ duration: 1, delay: .3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    <Image src={Photo} alt="Picture of the author" width={imageSize.width} height={imageSize.height} className={styles.photo} />
                </motion.div>
            </article>
        </section>
    );
};