import React, {useState} from 'react';
import { InputProps } from '@interfaces/inputa.interface';
import styles from '@styles/input.module.scss';

export const Input: React.FC<InputProps> = ({type, value, labelText, name, handleValue, rows, cols, valid}: InputProps) => {
    const [onFocus, setOnFocus] = useState(false);

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
        }
    }

    return (
        <div className={styles.container} >
            <label className={`${styles.labelText} ${(onFocus || value.length > 0) && styles.active}`} htmlFor={name}>{labelText}</label>
            {(type === "text" || type === "email") && 
                <input
                    {...props}
                    className={`${styles['input']} ${(value.length > 0 && type === "email") ? valid ? styles.isValid : styles.isInvalid : (value.length > 0 && type !== "email") ? styles.isValid : styles.inputBorder}`}
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