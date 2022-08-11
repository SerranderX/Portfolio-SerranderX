import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@components/Button/Button';
import { imageVariants } from '@components/Project/variants'; 
import { ProjectInterface } from '@interfaces/project.interface';
import { AppContext } from '@context/AppContext';
import styles from '@styles/Project.module.scss';

interface ProjectProps {
    handleFocusProject: () => void;
    projectFocus: boolean;
    project: ProjectInterface;
}

export const Project: React.FC<ProjectProps> = ({handleFocusProject, projectFocus, project}) => {
    const { lenguageState: { lenguageSelected } } = useContext(AppContext);

    const goToProject = () => {
        window.open(project.url, '_blank');
    }

    return (
        <div>
            <motion.div  
                className={styles.container}
                onClick={handleFocusProject}
                animate={projectFocus ? "focus" : "blur"}
                variants={imageVariants(project.image.src)}
            >
                {!projectFocus && (
                    <>
                        <div className={styles.titleBox}>{project.name}</div>
                        <div className={styles.techIcons}>
                            {project.icons.map((Icon, index) => 
                                <div key={`${project.name}-icon-${index}`} className={`${styles['project-icon-container']}`}>
                                    <Icon />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </motion.div>
            {projectFocus &&
                <motion.div 
                    className={`${styles['info-container']}`} 
                    onClick={handleFocusProject}
                    animate={{opacity: [0,1]}}
                    transition={{duration: 0.5}}
                >
                    <div className={`${styles['info-description']}`}>
                        <h1>{project.name}</h1>
                        <p>{project.description.map(desc => {
                            if(desc.lenguage === lenguageSelected){
                                return desc.data;
                            }
                        })}</p>
                    </div>
                    <div className={`${styles['info-button']}`} >
                        <Button classes={`${styles['project-button']}`} text={lenguageSelected === "es" ? "Visitar" : "Access"} handleButton={goToProject} />
                    </div>
                </motion.div>
            }
        </div>
    );
};