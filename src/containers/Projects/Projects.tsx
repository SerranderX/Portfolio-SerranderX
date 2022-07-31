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

export const Projects = () => {
    const [autoPlay, setAutoPlay] = useState(true);
    const [carouselStop, setCarouselStop] = useState(false);
    const refCarousel = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = useState(false);
    const { filters } = useContext<AppInitialState>(AppContext);
    const { lenguageState: { lenguageSelectedData: { data: { projects }} } } = useContext(AppContext);

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
                                numItem={6}
                                carouselStop={carouselStop}
                            />
                        )}
                    >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <Project
                                key={`${num}-project`}
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
