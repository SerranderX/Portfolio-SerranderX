import React, {useState} from 'react';
import { InputProps } from '@interfaces/inputa.interface';
import styles from '@styles/input.module.scss';

export const Input: React.FC<InputProps> = ({type, value, labelText, name, handleValue, rows, cols, changeValidEmailState, validEmail}: InputProps) => {
    const [onFocus, setOnFocus] = useState(false);
    const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const props = {type, name, rows, cols, value}

    const handleFocus = () => {
        setOnFocus(true);
    }

    const handleBlur = () => {
        setOnFocus(false);
    }

    const onChangeValue = (event: any): void => {
        if(handleValue){
            handleValue(event.target.value);

            if(type === 'email' && changeValidEmailState != undefined){
                if(event.target.value.match(validEmailRegex) && !validEmail){
                    changeValidEmailState('true');
                } else if(validEmail && !event.target.value.match(validEmailRegex)) {
                    changeValidEmailState('false');
                }
            }
        }
    }

    return (
        <div className={styles.container} >
            <label className={`${styles.labelText} ${(onFocus || value.length > 0) && styles.active}`} htmlFor={name}>{labelText}</label>
            {(type === "text" || type === "email") && 
                <input
                    {...props}
                    className={`${styles['input']} ${(value.length > 0 && type === "email") ? validEmail ? styles.isValid : styles.isInvalid : (value.length > 0 && type !== "email") ? styles.isValid : styles.inputBorder}`}
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onChange={onChangeValue}
                />
            }
            {type === "textarea" &&
                <textarea
                    {...props}
                    className={`${styles.textarea} ${value.length > 0 ? styles.isValid : styles.inputBorder}`}
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onChange={onChangeValue}
                />
            }
        </div>
    );
};