import React, { useEffect } from 'react';
import styles from '@styles/Experience.module.scss';
import { ArrowLeft } from '@icons/ArrowLeft';
import { ArrowRight } from '@icons/ArrowRight';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';

export const Experience = () => {
    const windowDimenion = useWindowsDimensions();
    const [currentIndex, setCurrentIndex] = React.useState(new Array(10).fill(0));

    useEffect(() => {
        if(windowDimenion.winWidth <= 1100){
            setCurrentIndex(new Array(9).fill(0));
        }

        if(windowDimenion.winWidth <= 1050){
            setCurrentIndex(new Array(8).fill(0));
        }
        
        if(windowDimenion.winWidth > 1100) {
            setCurrentIndex(new Array(10).fill(0));
        }
    }, [windowDimenion.winWidth]);

    return (
        <section className={styles.container}>
            <article className={styles.content}>
                <h1>Experiencia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem reprehenderit iure doloribus nobis sunt quisquam cumque commodi ut, alias fuga, quibusdam minima iusto. Dolor facilis blanditiis voluptas quisquam hic!</p>
            </article>
            <article className={styles.icons}>
                <div>
                    <button>
                        <ArrowLeft />
                    </button>
                </div>
                <ul>
                    {currentIndex.map((item, key) => (
                        <li key={key} style={{borderRadius: '50%', margin: '1rem', width: '58px', height: '58px'}}></li>
                    ))}
                </ul>
                <div>
                    <button>
                        <ArrowRight />
                    </button>
                </div>
            </article>
        </section>
    );
};