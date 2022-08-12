import { TargetAndTransition, Variants } from "framer-motion"

export interface ButtonProps {
    text: string
    classes?: string
    handleButton: (e: Event) => any | void
    variants?: Variants
    stateVariants?: boolean 
    variantsKeys?: string[]
    whileHover?: TargetAndTransition
}