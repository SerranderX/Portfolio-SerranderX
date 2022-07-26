import React from "react";
import { motion, Transition, Variants } from "framer-motion";

interface MenuToggleProps {
    show: boolean;
}

interface PathProps {
    variants?: Variants;
    transition?: Transition;
    stroke?: string;
    d?: string;
}

const Path: React.FC<PathProps> = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle: React.FC<MenuToggleProps> = ({ show }) => {
    return (
        <>
            <svg width="1.2em" height="1.2em" viewBox="0 0 23 23" style={{verticalAlign: 'middle', marginRight: '3.5rem'}}>
                <Path
                    stroke={"hsl(0, 100%, 100%)"}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    stroke={"hsl(0, 100%, 100%)"}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    stroke={"hsl(0, 100%, 100%)"}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
            <span>Menu</span>
        </>
    );
};
