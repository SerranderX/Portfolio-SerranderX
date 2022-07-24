import React, { useContext, useEffect, useRef } from "react";
import styles from '@styles/Projects.module.scss';
import Carousel from 'framer-motion-carousel';
import { Project } from '@components/Project/Project';
import { ButtonCarousel } from '@components/ButtonCarousel/ButtonCarousel';
import { CarouselDots } from '@components/CarouselDots/CarouselDots';
import { Button } from '@components/Button/Button';
import { AppContext } from '@context/AppContext';

export const Projects = () => {
    const [autoPlay, setAutoPlay] = React.useState(true);
    const [carouselStop, setCarouselStop] = React.useState(false);
    const refContainer = useRef<HTMLDivElement>(null);
    const refCarousel = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = React.useState(false);
    const state = useContext(AppContext);

    const handleFocusProyect = () => {
        handleAutoPlay();
        setFocus(!focus);
        setCarouselStop(!carouselStop);
    }

    const handleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (refContainer.current && !refContainer.current.contains(event.target) && focus) {
                handleFocusProyect();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [refContainer, focus]);

    console.log(state);

    return (
        <section className={styles.container} ref={refContainer}>
            <h1>Proyectos</h1>
            <section>
                <div className={`${styles['filter-container']}`}>
                    <Button text={'Angular'} handleButton={() => state.handleAngularFilter() } classes={`${styles['filter-button']} ${(state.Angular) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'React'} handleButton={() => state.handleReactFilter() } classes={`${styles['filter-button']} ${(state.React) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Javascript'} handleButton={() => state.handleJavascriptFilter() } classes={`${styles['filter-button']} ${(state.JavaScript) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Typescript'} handleButton={() => state.handleTypescriptFilter() } classes={`${styles['filter-button']} ${(state.TypeScript) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Java'} handleButton={() => state.handleJavaFilter() } classes={`${styles['filter-button']} ${(state.Java) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Nestjs'} handleButton={() => state.handleNestFilter() } classes={`${styles['filter-button']} ${(state.Nest) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Nextjs'} handleButton={() => state.handleNextFilter() } classes={`${styles['filter-button']} ${(state.Next) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Nodejs'} handleButton={() => state.handleNodeFilter() } classes={`${styles['filter-button']} ${(state.Node) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Framer Motion'} handleButton={() => state.handleFramerMotionFilter() } classes={`${styles['filter-button']} ${(state.FramerMotion) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
                    <Button text={'Spring'} handleButton={() => state.handleSpringFilter() } classes={`${styles['filter-button']} ${(state.Spring) ? styles['filter-button-on']: styles['filter-button-off'] }`}/>
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
                                key={num}
                                handleFocusProyect={handleFocusProyect}
                                proyectFocus={focus}
                            />
                        ))}
                    </Carousel>
                </div>
            </section>
        </section>
    );
};
