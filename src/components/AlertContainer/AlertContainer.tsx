import React from "react";
import styles from "@styles/AlertContainer.module.scss";
import { replaceWithBr } from "@utils/Utils";

interface AlertContainerProps {
    message: string;
}

export const AlertContainer: React.FC<AlertContainerProps> = ({
    message,
}): JSX.Element => {
    return (
        <p
            className={styles.message}
            dangerouslySetInnerHTML={{ __html: replaceWithBr(message) }}
        />
    );
};
