import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@context/AppContext';
import { motion } from 'framer-motion';
import { WindowSize } from '@interfaces/windowSize.interface';
import imageGeneralSection from '@images/photo2.jpg';
import Image from 'next/image';
import YouTube from "react-youtube";
import { replaceWithBr } from "@utils/Utils"
import styles from '@styles/AboutMe.module.scss';

interface AboutMeProps {
    windowDimenions:WindowSize
}

export const AboutMe: React.FC<AboutMeProps> = ({windowDimenions}) => {
    const { lenguageState: { lenguageSelectedData: {data: { aboutme }} } } = useContext(AppContext);
    
    const opts = {
        height: 480,
        playerVars: {
            autoplay: 0,
        },
        style: {
            width: '-webkit-fill-available',
        }
    };

    const optsMobile = {
        height: 600,
        playerVars: {
            autoplay: 0,
        },
        style: {
            width: '-webkit-fill-available',
        }
    };

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
                    <p dangerouslySetInnerHTML={{__html: replaceWithBr(aboutme.general.description)}} />
                </div>
            </article>
            <article className={`${styles['hobbies-container']}`}>
                <div className={`${styles['hobbies-video-container']}`} >
                    <motion.div
                        animate={{ opacity: [0, 1], boxShadow: `0 0 5px rgba(8, 139, 204, .8), 0 0 25px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 100px rgba(8, 139, 204, .8)`}}
                        transition={{ duration: 1, delay: .3, ease: [0.04, 0.62, 0.23, 0.98] }} 
                        className={`${styles['hobbies-video']}`}
                    >
                        {windowDimenions.winWidth > 1200 && <YouTube videoId="PaXH_S2AqDg" opts={opts} title={"[COVER] Radical Dreamers - Yasunori Mitsuda from Chrono Cross"} />}
                        {windowDimenions.winWidth <= 1200 && <YouTube videoId="PaXH_S2AqDg" opts={optsMobile} title={"[COVER] Radical Dreamers - Yasunori Mitsuda from Chrono Cross"} />}
                    </motion.div>
                </div>
                <div className={`${styles['hobbies-info-container']}`}>
                    <h2>{aboutme.skills.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: replaceWithBr(aboutme.skills.description)}} />
                </div>
            </article>
        </section>
    );
};