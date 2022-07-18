import React from 'react';
import styles from '@styles/Proyects.module.scss';
import Carousel from 'react-elastic-carousel'

export const Proyects = () => {

    return (
        <article className={styles.container}>
            <h1>Proyectos</h1>
            <section>
                <Carousel itemsToShow={3} isRTL={false}>
                    {[1,2,3,4,5,6].map(num => 
                        <div key={num} style={{width: '300px', height: '500px', backgroundColor: 'white'}}>
                        </div>
                    )}
                </Carousel>
            </section>
        </article>
    );
};