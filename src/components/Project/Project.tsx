import React from 'react';
import PokecardexjsSS from '@images/projects/pokecardexjs.jpg';
import styles from '@styles/Project.module.scss';
import { motion } from 'framer-motion';
import { Button } from '@components/Button/Button';

interface ProjectProps {
    handleFocusProyect: () => void;
    proyectFocus: boolean;
}

const variants = (src:any) => ({
    focus: {
        background: `radial-gradient(circle, transparent 65%, black 100%), url(${src}) `,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'brightness(0.1)',
        
    },
    blur: { 
        background: `radial-gradient(circle, transparent 25%, #000000a0 100%), url(${src}) `,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'brightness(1)',
    },
})

export const Project: React.FC<ProjectProps> = ({handleFocusProyect, proyectFocus}) => {
    const goToProject = () => {
        window.open('https://pokecardexjs.com', '_blank');
    }

    return (
        <div>
            <motion.div  
                className={styles.container}
                onClick={handleFocusProyect} 
                animate={proyectFocus ? "focus" : "blur"}
                variants={variants(PokecardexjsSS.src)}
            >
            </motion.div>
            {proyectFocus &&
                <motion.div 
                    className={`${styles['info-container']}`} 
                    onClick={handleFocusProyect}
                    animate={{opacity: [0,1]}}
                    transition={{duration: 0.5}}
                >
                    <div className={`${styles['info-description']}`}>
                        <h1>Pokecardexjs</h1>
                        <p>
                            Una simple y rapida pokedex inspirada en el juego de cartas de Pokemon.
                        </p>
                    </div>
                    <div className={`${styles['info-button']}`} >
                        <Button classes={`${styles['proyect-button']}`} text={"Visitar"} handleButton={goToProject} />
                    </div>
                </motion.div>
            }
        </div>
    );
};