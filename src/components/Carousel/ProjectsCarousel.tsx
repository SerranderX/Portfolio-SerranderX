import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";
import { motion, animate, useMotionValue, PanInfo } from "motion/react";

interface ArrowRenderProps {
    handlePrev: () => void;
    handleNext: () => void;
    activeIndex: number;
}

interface DotsRenderProps {
    setActiveIndex: (index: number) => void;
    activeIndex: number;
}

interface ProjectsCarouselProps {
    children: ReactNode;
    autoPlay?: boolean;
    interval?: number;
    loop?: boolean;
    renderArrowLeft?: (props: ArrowRenderProps) => ReactNode;
    renderArrowRight?: (props: ArrowRenderProps) => ReactNode;
    renderDots?: (props: DotsRenderProps) => ReactNode;
}

const containerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    display: "flex",
};

const slideStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "inline-block",
    flex: "none",
};

const transition = { type: "spring", bounce: 0 } as const;

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
    children,
    autoPlay = true,
    interval = 2000,
    loop = true,
    renderArrowLeft,
    renderArrowRight,
    renderDots,
}) => {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const slides = React.Children.toArray(children);

    const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1 === slides.length ? (loop ? 0 : prev) : prev + 1));
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 < 0 ? (loop ? slides.length - 1 : 0) : prev - 1));
    };

    const handleEndDrag = (_e: MouseEvent | TouchEvent | PointerEvent, dragProps: PanInfo) => {
        const clientWidth = containerRef.current?.clientWidth || 0;
        const { offset } = dragProps;
        // En los extremos, volver a la posición actual (fix del carousel original).
        if ((index + 1 === slides.length && offset.x < 0) || (index === 0 && offset.x > 0)) {
            animate(x, calculateNewX(), transition);
            return;
        }
        if (offset.x > clientWidth / 4) {
            handlePrev();
        } else if (offset.x < -clientWidth / 4) {
            handleNext();
        } else {
            animate(x, calculateNewX(), transition);
        }
    };

    useEffect(() => {
        const controls = animate(x, calculateNewX(), transition);
        return controls.stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => handleNext(), interval);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoPlay, interval, slides.length, loop]);

    return (
        <div ref={containerRef} style={containerStyle}>
            {slides.map((child, i) => (
                <motion.div
                    key={i}
                    style={{ ...slideStyle, x, left: `${i * 100}%`, right: `${i * 100}%` }}
                    drag={slides.length > 1 ? "x" : false}
                    dragElastic={0.3}
                    onDragEnd={handleEndDrag}
                >
                    {child}
                </motion.div>
            ))}
            {renderArrowLeft?.({ handlePrev, handleNext, activeIndex: index })}
            {renderArrowRight?.({ handlePrev, handleNext, activeIndex: index })}
            {renderDots?.({ setActiveIndex: setIndex, activeIndex: index })}
        </div>
    );
};

export default ProjectsCarousel;
