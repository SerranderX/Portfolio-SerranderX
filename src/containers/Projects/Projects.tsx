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

export const Projects = () => {
    const [autoPlay, setAutoPlay] = useState(true);
    const [carouselStop, setCarouselStop] = useState(false);
    const [resetPosition, setResetPosition] = useState(false);
    const refCarousel = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = useState(false);
    const { lenguageState: { lenguageSelectedData: { data: { projects }} } } = useContext(AppContext);
    const [proyectsList, setProyectsList] = useState<ProjectInterface[]>(ProjectsData);
    const { filters } = useContext<AppInitialState>(AppContext);

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
        const activeFilters = filters.filter(filter => filter.state === true);

        if(activeFilters.length > 0){
            const filteredProjects = proyectsList.filter(project => {
                return activeFilters.some(filter => project.technologies.includes(filter.name));
            })

            setProyectsList(filteredProjects);
            setResetPosition(true);
        } else {
            setProyectsList(ProjectsData);
            setResetPosition(true);
        }
    }, [filters]);

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
                <div className={styles.carouselContainer} ref={refCarousel}>
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
                                numItem={proyectsList.length}
                                carouselStop={carouselStop}
                                resetPosition={resetPosition}
                                setResetPosition={setResetPosition}
                            />
                        )}
                    >
                        {proyectsList.map(project => (
                            <Project
                                key={`${project.name}-project`}
                                project={project}
                                handleFocusProject={handleFocusProject}
                                projectFocus={focus}
                            />
                        ))}
                    </Carousel>
                </div>
            </section>
        </section>
    );
};
