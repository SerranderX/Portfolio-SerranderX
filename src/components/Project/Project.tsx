import React from 'react';
import PokecardexjsSS from '@images/projects/pokecardexjs.jpg';
import styles from '@styles/Project.module.scss';
import { motion } from 'framer-motion';
import { Button } from '@components/Button/Button';
import { imageVariants } from '@components/Project/variants'; 

interface ProjectProps {
    handleFocusProject: () => void;
    projectFocus: boolean;
}

export const Project: React.FC<ProjectProps> = ({handleFocusProject: handleFocusProject, projectFocus: projectFocus}) => {
    const goToProject = () => {
        window.open('https://pokecarddexjs.com', '_blank');
    }

    return (
        <div>
            <motion.div  
                className={styles.container}
                onClick={handleFocusProject} 
                animate={projectFocus ? "focus" : "blur"}
                variants={imageVariants(PokecardexjsSS.src)}
            >
            </motion.div>
            {projectFocus &&
                <motion.div 
                    className={`${styles['info-container']}`} 
                    onClick={handleFocusProject}
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
                        <Button classes={`${styles['project-button']}`} text={"Visitar"} handleButton={goToProject} />
                    </div>
                </motion.div>
            }
        </div>
    );
};