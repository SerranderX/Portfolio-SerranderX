import React, { useContext, useEffect, useRef, useState } from "react";
import styles from '@styles/Projects.module.scss';
import Carousel from 'framer-motion-carousel';
import { Project } from '@components/Project/Project';
import { ButtonCarousel } from '@components/ButtonCarousel/ButtonCarousel';
import { CarouselDots } from '@components/CarouselDots/CarouselDots';
import { Button } from '@components/Button/Button';
import { AppContext } from '@context/AppContext';
import { filterButtonVariantsKeys, filterButtonVariants, filterButtonWhileHover } from '@containers/Projects/variants';
import { AppInitialState } from "@interfaces/appInitialStatea.interface";
import { ProjectsData } from "@utils/Utils";
import { ProjectInterface } from "@interfaces/project.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import DevelopGif from '@gifs/develop.gif';
import { WindowSize } from "@interfaces/windowSize.interface";

const carouselBoxShadow = '0 0 5px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 5px rgba(8, 139, 204, .8), 0 0 25px rgba(8, 139, 204, .8)';

interface ProjectsProps {
    windowDimenions:WindowSize
}

export const Projects: React.FC<ProjectsProps> = ({windowDimenions}) => {
    const [autoPlay, setAutoPlay] = useState(true);
    const [carouselStop, setCarouselStop] = useState(false);
    const [resetPosition, setResetPosition] = useState(false);
    const refCarousel = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = useState(false);
    const { lenguageState: { lenguageSelectedData: { data: { projects }} } } = useContext(AppContext);
    const [projectsList, setProjectsList] = useState<ProjectInterface[]>(ProjectsData);
    const { projectsFilters: { filters, activeFiltersCount } } = useContext<AppInitialState>(AppContext);
    const [gifSize, setGifSize] = useState<number>(windowDimenions.winWidth > 1200 ? 500 : 700);

    useEffect(() => {
        setGifSize(windowDimenions.winWidth > 1200 ? 500 : 700);
    }, [windowDimenions]);

    const handleFocusProject = () => {
        handleAutoPlay();
        setFocus(!focus);
        setCarouselStop(!carouselStop);
    }

    const handleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (refCarousel.current && !refCarousel.current.contains(event.target) && focus) {
                handleFocusProject();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [refCarousel, focus]);

    useEffect(() => {
        if(activeFiltersCount > 0){
            const activeFilters = filters.filter(filter => filter.state === true);
            const filteredProjects = ProjectsData.filter(project => {
                return activeFilters.some(filter => project.technologies.includes(filter.name));
            })

            setProjectsList(filteredProjects);
            setResetPosition(true);
        } else {
            setProjectsList(ProjectsData);
            setResetPosition(true);
        }
    }, [activeFiltersCount]);

    return (
        <section className={styles.container} id="projects">
            <h1>{projects.title}</h1>
            <section>
                <div className={`${styles['filter-container']}`}>
                    {filters && filters.map(filter => (
                        <Button 
                            key={`${filter.name}-filters`}
                            text={filter.name} 
                            handleButton={filter.handleFilter} 
                            stateVariants={filter.state} 
                            classes={`${styles['filter-button']}`} 
                            variants={filterButtonVariants} 
                            variantsKeys={filterButtonVariantsKeys} 
                            whileHover={filterButtonWhileHover}
                        />
                    ))}
                </div>
                {projectsList.length > 0 && 
                    <motion.div 
                        className={styles.carouselContainer} 
                        ref={refCarousel} 
                        style={{boxShadow: `${projectsList.length > 0 ? carouselBoxShadow : 'none'}`}}
                        animate={{textAlign: 'center', opacity: [0, 1]}} 
                        transition={{ duration: .5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <Carousel
                            autoPlay={autoPlay}
                            interval={5000}
                            loop={true}
                            renderArrowLeft={(props) => (
                                <ButtonCarousel
                                    {...props}
                                    left={true}
                                    className={`${styles.carouselButton} ${styles.left}`}
                                    carouselStop={carouselStop}
                                />
                            )}
                            renderArrowRight={(props) => (
                                <ButtonCarousel
                                    {...props}
                                    right={true}
                                    className={`${styles.carouselButton} ${styles.right}`}
                                    carouselStop={carouselStop}
                                />
                            )}
                            renderDots={(props) => (
                                <CarouselDots
                                    {...props}
                                    numItem={projectsList.length}
                                    carouselStop={carouselStop}
                                    resetPosition={resetPosition}
                                    setResetPosition={setResetPosition}
                                />
                            )}
                        >
                            {projectsList.map(project => (
                                <Project
                                    key={`${project.name}-project`}
                                    project={project}
                                    handleFocusProject={handleFocusProject}
                                    projectFocus={focus}
                                />
                            ))}
                        </Carousel>
                    </motion.div>
                }
                {projectsList.length == 0 && (
                    <motion.div className={`${styles['project-not-found-container']}`} animate={{textAlign: 'center', opacity: [0, 1]}} transition={{ duration: .5, ease: [0.04, 0.62, 0.23, 0.98] }}>
                        <p>De momento no se encuentran proyectos para los filtros seleccionados</p>
                        <p>Estoy trabajando en nuevos proyectos para el futuro</p>
                        <Image src={DevelopGif} width={gifSize} height={gifSize} alt={"developGif"}/>
                    </motion.div>
                )}
            </section>
        </section>
    );
};
