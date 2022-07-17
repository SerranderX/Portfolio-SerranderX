import React, { useEffect, useState } from 'react';
import styles from '@styles/Experience.module.scss';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { ExperienceItems } from '@interfaces/ExperienceItems';
import { ExperienceIcons } from '@utils/Utils'

export const Experience = () => {
    const windowDimenion = useWindowsDimensions();
    const [currentIndex, setCurrentIndex] = useState(new Array(10).fill(0));
    const [experienceItems, setExperienceItems]: Array<ExperienceItems> = useState(ExperienceIcons);

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
                    {experienceItems.map((item:ExperienceItems, key:number) => 
                        {
                            if(key < 9){
                                return (
                                    <li key={key}>
                                        <item.icon />
                                    </li>
                                )
                            } 
                        }
                        
                    )}
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