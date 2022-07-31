import { Variants } from "framer-motion"

export const variantsList: Variants = {
    open: { 
        opacity: 1, 
        height: 'auto',
        backgroundColor: "rgba(128, 19, 85, 0.5)",
    },
    closed: { 
        opacity: 0, 
        height: 0 
    },
}

export const buttonVariants: Variants = {
    on: {
        border: "1px solid rgb(238, 35, 130)",
        backgroundColor: "rgba(128, 19, 85, .4)",
        borderRadius: "5px",
        transition:{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98] }
    },
    off: {
        border: "1px solid rgb(238, 35, 130, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderRadius: "5px",
        transition:{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98] }
    }
}