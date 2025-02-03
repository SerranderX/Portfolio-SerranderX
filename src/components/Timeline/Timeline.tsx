import React from 'react';
import TimelineItem from './TimelineItem';
import styles from '@styles/Timeline.module.scss';
import { WindowSize } from '@interfaces/windowSize.interface';

interface TimelineEntry {
    date: string;
    title: string;
    company: string;
    description: string;
}

interface TimelineProps {
    windowDimenions: WindowSize;
    entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ windowDimenions, entries }) => {
    const showDesc = windowDimenions.winWidth > 1200;

    const y= entries.length 
    return (
        <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
                <div className={styles.line}></div>
                {/* <ol> */}
                {entries.map((entry, index) => (
                    <TimelineItem
                    key={index}
                    date={entry.date}
                    title={entry.title}
                    company={entry.company}
                    description={entry.description}
                    showDesc={showDesc}
                    idx={index}
                    position={index % 2 === 0 ? 'top' : 'bottom'}
                    />
                ))} 
                {/* </ol>     */}
            </div>
        </div>
    );
};

export default Timeline;
