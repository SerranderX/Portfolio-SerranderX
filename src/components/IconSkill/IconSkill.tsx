import React, { SVGProps } from 'react';
import { motion } from 'framer-motion';

interface IconSkillProps {
    index: number;
    Item: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    xPosition: number;
} 

export const IconSkill:React.FC<IconSkillProps> = ({index, Item, xPosition}) => {
    return (
        <motion.li key={index} animate={{x:xPosition}} transition={{ duration: .2 }}>
            <Item />
        </motion.li> 
    );
};