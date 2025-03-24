import { AppContext } from "@context/AppContext";
import { WindowSize } from "@interfaces/windowSize.interface";
import { useContext, useEffect, useRef, useState } from "react";
import styles from '@styles/Timeline.module.scss';
import TimelineItem from "@components/Timeline/TimelineItem";
import { CardSize } from "@interfaces/timelineEntries.interface";

interface TimelineProps {
    windowDimenions:WindowSize
}

export const Timeline: React.FC<TimelineProps> = ({windowDimenions}) => {
    const {
        lenguageState: {
            lenguageSelectedData: {
                data: { timeline: {
                    title,
                    description,
                    workHistory
                } },
            },
        },
    } = useContext(AppContext);
    const container = useRef<HTMLDivElement>(null);
    const timeline = useRef<HTMLDivElement>(null);
    const [currentTimelineWidth, setCurrentTimelineWidth] = useState<number>(0);
    const [maxCardWidth, setMaxCardWidth] = useState<number>(0);
    const [maxCardHeight, setMaxCardHeight] = useState<number>(0);
    const [cardsSizes, setCardsSizes] = useState<CardSize[]>([]);

    useEffect(() => {
        if (container.current) {
            if(container.current.children.length > 1) {
                let maxWidth = 0;
                let maxHeight = 0;
                for (let i = 0; i < container.current.children.length; i++) {
                    if(i > 0) {
                        const width = container.current.children[i].children[0].clientWidth;
                        const height = container.current.children[i].children[0].clientHeight;
                        if(width > maxWidth) {
                            maxWidth = width;
                        }
                        if(height > maxHeight) {
                            maxHeight = height;
                        }
                        setCardsSizes(prev => [...prev, { cardWidth: width, cardHeight: height }]);
                    }
                }
                setMaxCardWidth(maxWidth);
                setMaxCardHeight(maxHeight);
            }
        }
        if (timeline.current) {
            setCurrentTimelineWidth(timeline.current.clientWidth);
        }
    }, [container, timeline, windowDimenions]);

    useEffect(() => {
        if (timeline.current && currentTimelineWidth < timeline.current.clientWidth) {
            setCurrentTimelineWidth(timeline.current.clientWidth);
        }
    }, [windowDimenions]);

    return (
        <section className={styles.container} id="timeline">
            <article className={styles.timelineSection}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.timelineContainer}>
                    <div className={styles.timeline}  ref={container}>
                        <div className={styles.line} ref={timeline}></div>
                            {workHistory.map((entry, index) => (
                                <TimelineItem
                                    key={index}
                                    date={entry.date}
                                    title={entry.title}
                                    company={entry.company}
                                    description={entry.description}
                                    idx={index}
                                    itemsLength={workHistory.length}
                                    containerWidth={currentTimelineWidth}
                                    windowDimenions={windowDimenions}
                                    maxCardWidth={maxCardWidth}
                                    maxCardHeight={maxCardHeight}
                                    cardsSizes={cardsSizes}
                                    position={index % 2 === 0 ? 'top' : 'bottom'}
                                />
                            ))}
                    </div>
                </div>
            </article>
        </section>
    );
    // useEffect(() => {
    //     const visibleItemsToAdjust = adjustVisibleItems(windowDimenions.winWidth, 1200, 8, 6)
    //     if(visibleItemsToAdjust !== visibleItemsAdjust){
    //         setVisibleItemsAdjust(visibleItemsToAdjust);
    //     }
    // }, [windowDimenions]);
};