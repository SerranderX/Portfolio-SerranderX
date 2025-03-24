import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@styles/TimelineItem.module.scss";
import { CardSize } from "@interfaces/timelineEntries.interface";
import { WindowSize } from "@interfaces/windowSize.interface";

interface TimelineItemProps {
    date: string;
    title: string;
    company: string;
    description: string;
    position?: "top" | "bottom";
    idx: number;
    itemsLength: number;
    containerWidth: number;
    windowDimenions: WindowSize;
    maxCardWidth: number;
    maxCardHeight: number;
    cardsSizes: CardSize[];
}

const multiplierForMargin = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const calculateHorizontalAdjust = (
    itemsLength: number,
    idx: number,
    maxCardWidth: number,
    windowDimenions: WindowSize
) => {
    if (
        itemsLength > 4 &&
        windowDimenions &&
        windowDimenions.winWidth >= 1200
    ) {
        let pixelsForFirstCard = 0;
        let multiplierForFirstPixelCard = 1; 
        if (itemsLength > 6) {
            pixelsForFirstCard = 10;
            multiplierForFirstPixelCard = 3;
        } else {
            pixelsForFirstCard = 0;
        }
        const par = idx % 2;
        if (idx === 0) {
            return `-${pixelsForFirstCard}px`;
        } else {
            let pixelsToCompense = 0;
            pixelsToCompense = maxCardWidth + pixelsForFirstCard * multiplierForFirstPixelCard;
            if (par === 0 && idx > 2) {
                pixelsToCompense = pixelsToCompense * multiplierForMargin[idx];
            } else if (idx > 2) {
                pixelsToCompense = pixelsToCompense * multiplierForMargin[idx] - 3;
            }
            return `-${pixelsToCompense}px`;
        }
    } else {
        return "auto";
    }
};

const getMarginLeft = (idx: number) => {
    return idx > 0 ? (idx % 2 == 0 ? "1rem" : ".5rem") : "0";
};

const TimelineItem: React.FC<TimelineItemProps> = ({
    date,
    title,
    company,
    description,
    position = "top",
    idx,
    itemsLength,
    containerWidth,
    cardsSizes,
    maxCardWidth,
    maxCardHeight,
    windowDimenions,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMaxCardWidth, setIsMaxCardWidth] = useState(false);
    const [lineToBox, setLineToBox] = useState<{}>({});

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    const toggleHoverClose = () => {
        if (isHovered) setIsHovered(false);
    };

    useEffect(() => {
        if (cardsSizes.length > 0 && !isMaxCardWidth) {
            const ifMaxCardWidth =
                maxCardHeight == cardsSizes[idx].cardHeight ? true : false;
            if (ifMaxCardWidth) setIsMaxCardWidth(ifMaxCardWidth);
        }

        if (isMaxCardWidth) {
            const par = idx % 2;
            setLineToBox({ height: "25px", left: "-20%", top: par === 0 ? "auto" : "100%", bottom: par === 0 ? "100%" : "auto" });
        } else {
            setLineToBox({ height: "55px" });
        }
    }, [cardsSizes, windowDimenions, idx, isMaxCardWidth, maxCardHeight]);
    
    const adjust = calculateHorizontalAdjust(
        itemsLength,
        idx,
        maxCardWidth,
        windowDimenions
    );
    const marginLeft = getMarginLeft(idx);

    return (
        <div
            className={`${styles.timelineItem} ${styles[position]}`}
            style={{ left: adjust }}
        >
            <div
                className={styles.content}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHoverClose}
                style={{ marginLeft: marginLeft }}
            >
                <span className={styles.date}>{date}</span>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
                    <motion.p
                        className={styles.description}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isHovered ? "auto" : 0,
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                    >
                        {description}
                    </motion.p>
            </div>
            <div className={styles.point}>
                <div className={styles.lineToBox} style={{ ...lineToBox }} />
                <div className={styles.pointInner} />
            </div>
        </div>
    );
};

export default TimelineItem;
