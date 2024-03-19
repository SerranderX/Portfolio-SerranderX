import React, { useContext } from "react";
import styles from "@styles/ResumeDownload.module.scss";
import { AppContext } from "@context/AppContext";
import { Button } from "@components/Button/Button";
import { ENV } from "@config/config";

export const ResumeDownload = (): JSX.Element => {
    const {
        lenguageState: {
            lenguageSelectedData: {
                data: {
                    header: {
                        resumeModal: {
                            instruction,
                            lenguages: { english, spanish },
                        },
                    },
                },
            },
        },
    } = useContext(AppContext);
    const {
        lenguageState: { lenguageList },
    } = useContext(AppContext);

    const handleDownloadCV = (lenguage: string) => {
        const link = document.createElement("a");
        const filename = lenguage == "es" ? ENV.cvhref : ENV.resumehref;
        link.href = "cv/" + filename;
        link.setAttribute("download", filename);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode?.removeChild(link);
    };

    return (
        <div>
            <p className={styles.message}>{instruction}</p>
            {lenguageList.map((item) => {
                return (
                    <Button
                        key={`${item.lenguage}-lenguage`}
                        text={""}
                        classes={styles.button}
                        handleButton={() => handleDownloadCV(item.lenguage)}
                        containerClass={styles.marginButton}
                    >
                        <p>
                            {item.lenguage == "es" ? spanish : english}{" "}
                            <item.flagIcon />
                        </p>
                    </Button>
                );
            })}
        </div>
    );
};
