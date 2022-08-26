import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "@styles/Modal.module.scss";
import { motion } from "framer-motion";

interface ModalProps {
    show: boolean
    children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ show, children }) => {
    const [_document, setDocument] = useState<Document | null>(null);

    useEffect(() => {
        setDocument(document);
    }, []);

    const modal = <motion.div className={styles.wrapper}>
                    <motion.div 
                        className={styles.content}
                        animate={{opacity: [0,1], scale: [.95, 1]}}
                        transition={{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98], delay: .2 }}
                    >
                        {children}
                    </motion.div>
                </motion.div>;

    const content = show ? modal : null;

    if (_document) {
        return ReactDOM.createPortal(
            content,
            _document.getElementById("modal") as HTMLElement
        );
    } else {
        return null;
    }
}
