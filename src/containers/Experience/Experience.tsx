import React, { SVGProps, useContext, useEffect, useState } from 'react';
import { ExperienceIcons } from '@utils/Utils'
import { Carousel } from '@components/Carousel/Carousel';
import Timeline from '@components/Timeline/Timeline';
import { WindowSize } from '@interfaces/windowSize.interface';
import { ExperienceItems } from '@interfaces/experienceItems.interface';
import { AppContext } from '@context/AppContext';
import styles from '@styles/Experience.module.scss';

interface ExperienceProps {
    windowDimenions:WindowSize
}

const adjustVisibleItems = (width:number, moreThan:number, firstValue:number, SecondValue:number):number => {
    return width > moreThan ? firstValue : SecondValue;
}

const workHistory = [
    {
        date: "2023 - Present",
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        description: "Leading frontend development team, implementing modern React applications with TypeScript and Next.js"
    },
    {
        date: "2021 - 2023",
        title: "Frontend Developer",
        company: "Digital Innovations",
        description: "Developed responsive web applications using React, Redux, and modern CSS frameworks"
    },
    {
        date: "2019 - 2021",
        title: "Web Developer",
        company: "Creative Studios",
        description: "Created dynamic websites using JavaScript, HTML5, and CSS3"
    },
    {
        date: "2018 - 2019",
        title: "Junior Developer",
        company: "StartUp Labs",
        description: "Started career working on frontend development with jQuery and Bootstrap"
    }
];

export const Experience: React.FC<ExperienceProps> = ({windowDimenions}) => {
    const [experienceItems, setExperienceItems] = useState<ExperienceItems[]>(ExperienceIcons);
    const [visibleItemsAdjust, setVisibleItemsAdjust] = useState<number>(adjustVisibleItems(windowDimenions.winWidth, 1200, 8, 6));
    const { lenguageState: { lenguageSelectedData: {data: { experience }} } } = useContext(AppContext);

    useEffect(() => {
        const visibleItemsToAdjust = adjustVisibleItems(windowDimenions.winWidth, 1200, 8, 6)
        if(visibleItemsToAdjust !== visibleItemsAdjust){
            setVisibleItemsAdjust(visibleItemsToAdjust);
        }
    }, [windowDimenions]);

    return (
        <section className={styles.container} id="experience">
            <article className={styles.content}>
                <h1>{experience.title}</h1>
                <p>{experience.description}</p>
            </article>
            <Carousel items={experienceItems} visibleItems={visibleItemsAdjust} containerClass={styles.icons} autoPlay={true} interval={3000} />
            <article className={styles.timelineSection}>
                <h2>Work History Through Time</h2>
                <Timeline windowDimenions={windowDimenions} entries={workHistory} />
            </article>
        </section>
    );
};