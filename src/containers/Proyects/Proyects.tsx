import React from 'react';
import styles from '@styles/Proyects.module.scss';
import Carousel from "framer-motion-carousel";

export const Proyects = () => {
    return (
        <section className={styles.container}>
            <h1>Proyectos</h1>
            <section>
                <Carousel autoPlay={true} interval={5000} loop={true}>
                    {[1,2,3,4,5,6].map(num => 
                        <div key={num} style={{width: '100%', height: '500px', backgroundColor: `${num % 2 ? "blue" : "red"}`}}>
                        </div>
                    )}
                </Carousel>
            </section>
        </section>
    );
};