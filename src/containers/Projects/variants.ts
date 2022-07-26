import { Variants } from "framer-motion";

export const filterButtonVariantsKeys = ["on", "off"];

export const filterButtonVariants: Variants = {
    on: {
        borderRadius: '10px',
        backgroundColor: 'rgb(8, 139, 204)',
        boxShadow: '0 0 10px rgba(8, 139, 204, 1), 0 0 20px rgba(8, 139, 204, 1), 0 0 10px rgba(8, 139, 204, 1), 0 0 25px rgba(8, 139, 204, 1)',
        transition: {
            duration: .5,
            ease: "easeInOut"
        }
    },
    off: {
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(8, 139, 204, 0), 0 0 20px rgba(8, 139, 204, 0), 0 0 10px rgba(8, 139, 204, 0), 0 0 25px rgba(8, 139, 204, 0)',
        backgroundColor: `rgb(8, 139, 204, .3)`,
        transition: {
            duration: .5,
            ease: "easeInOut"
        }
    }
}

export const filterButtonWhileHover = {
    backgroundColor: 'rgb(8, 139, 204)',
    boxShadow: `0 0 10px rgb(8, 139, 204),
                0 0 20px rgb(8, 139, 204),
                0 0 10px rgb(8, 139, 204),
                0 0 25px rgb(8, 139, 204)`,
    transition: {
        duration: .5,
        ease: "easeInOut"
    }
}