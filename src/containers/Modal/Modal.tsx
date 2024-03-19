import React, {
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import ReactDOM from "react-dom";
import styles from "@styles/Modal.module.scss";
import { motion } from "framer-motion";
import { AppContext } from "@context/AppContext";
import { Button } from "@components/Button/Button";

interface ModalProps {
    show: boolean;
    handlerClose: () => void;
    title: string | undefined;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    show,
    handlerClose,
    title,
    children,
}) => {
    const {
        lenguageState: {
            lenguageSelectedData: {
                data: { alertContent },
            },
        },
    } = useContext(AppContext);
    const [_document, setDocument] = useState<Document | null>(null);

    useEffect(() => {
        setDocument(document);
    }, []);

    const modal = (
        <motion.div className={styles.wrapper}>
            <motion.div
                className={styles.content}
                animate={{ opacity: [0, 1], scale: [0.95, 1] }}
                transition={{
                    duration: 0.6,
                    ease: [0.04, 0.62, 0.23, 0.98],
                    delay: 0.2,
                }}
            >
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>
                    {children}
                    <Button
                        handleButton={handlerClose}
                        text={alertContent.closeButton}
                    />
                </div>
            </motion.div>
        </motion.div>
    );

    const content = show ? modal : null;

    const Modal = _document
        ? ReactDOM.createPortal(
              content,
              _document.getElementById("modal") as HTMLElement
          )
        : null;

    return Modal;
};
