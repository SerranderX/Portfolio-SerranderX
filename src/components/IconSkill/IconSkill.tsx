import React, { SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItems } from '@interfaces/experienceItems.interface';

interface IconSkillProps {
    index: number;
    Item: ExperienceItems;
    xPosition?: number;
} 

export const IconSkill:React.FC<IconSkillProps> = ({index, Item, xPosition}) => {
    return (
        <motion.li animate={{x:xPosition}} transition={{ duration: .2 }}>
            <Item.icon />
            <span>{Item.name}</span>
        </motion.li>
    );
};