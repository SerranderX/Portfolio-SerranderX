import React, {useState} from 'react';
import { InputProps } from '@interfaces/Input.interface';
import styles from '@styles/input.module.scss';

export const Input: React.FC<InputProps> = ({type, value, labelText, name, handleValue, rows, cols}: InputProps) => {
    const [onFocus, setOnFocus] = useState(false);

    const props = {type, name, rows, cols}

    const handleFocus = () => {
        setOnFocus(true);
    }

    const handleBlur = () => {
        setOnFocus(false);
    }

    const onChangeValue = (event: any): void => {
        handleValue(event.target.value);
    }

    return (
        <div className={styles.container} >
            <label className={`${styles.labelText} ${(onFocus || value.length > 0) && styles.active}`} htmlFor={name}>{labelText}</label>
            {(type === "text" || type === "email") && 
                <input
                    {...props}
                    className={styles.input}
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onChange={onChangeValue}
                />
            }
            {type === "textarea" &&
                <textarea
                    {...props}
                    className={styles.textarea}
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onChange={onChangeValue}
                />
            }
        </div>
    );
};