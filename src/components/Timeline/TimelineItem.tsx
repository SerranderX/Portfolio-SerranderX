import React, { useState } from 'react';
import { motion } from "framer-motion";
import styles from '@styles/TimelineItem.module.scss';

interface TimelineItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
    position?: 'top' | 'bottom';
    showDesc: boolean;
    idx: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, description, position = 'top', showDesc, idx }) => {

    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    // const leftAdjust = idx > 0 ? idx * 5 : 'auto';
    // const rightAdjust = idx == 0 ? 8 : 'auto';
    // style={{left: `-${leftAdjust}%`, right: `-${rightAdjust}%`}}

    return (
        <div className={`${styles.timelineItem} ${styles[position]}`}  onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <div className={styles.content} >
                <span className={styles.date}>{date}</span>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
                {showDesc && <motion.p 
                                className={styles.description} 
                                initial={{height: 0, opacity: 0}} 
                                animate={{height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0}} 
                                transition={{ duration: .5, ease: [0.04, 0.62, 0.23, 0.98] }}>
                                    {description}
                                </motion.p>}
            </div>
            <div className={styles.point}>
                <div className={styles.pointInner}></div>
            </div>
        </div>
    );
};

export default TimelineItem;
