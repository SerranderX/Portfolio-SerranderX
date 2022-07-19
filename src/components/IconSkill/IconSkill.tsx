import React, { SVGProps } from 'react';
import { motion } from 'framer-motion';

interface IconSkillProps {
    index: number;
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    childWidth: number;
    currentPosition: number;
    rightArrow: boolean;
} 

export const IconSkill:React.FC<IconSkillProps> = ({index, Icon, childWidth, currentPosition, rightArrow}) => {
    
    const xPosition = () => {
        if(currentPosition > 0){
            const x = currentPosition * childWidth;
            if(rightArrow){
                return x * -1;
            } else {
                return x;
            }
        }
        return 0;
    }

    return (
        <motion.li key={index} animate={{x:xPosition()}}>
            <Icon />
        </motion.li> 
    );
};