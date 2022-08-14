import { TargetAndTransition, Variants } from "framer-motion"
import { RefObject } from "react"
import { AppContactData } from "./appLenguageData.interface"

export interface ButtonProps {
    text: string
    classes?: string
    handleButton: (e: Event, form?: RefObject<HTMLFormElement>, contact?:AppContactData) => any | void
    variants?: Variants
    stateVariants?: boolean 
    variantsKeys?: string[]
    whileHover?: TargetAndTransition
}