import React from 'react';
import style from './Input.module.scss';

// onChange
// label
// palceholder
// value
// type

type InputProps = {
    required: boolean
    label: string
    placeholder: string
    value: string
    type?: HTMLInputElement['type']
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    required, value, label, placeholder, type = 'text', onChange
}: InputProps) => {

    return (
        <label className={style.label}>
            <span className={style.labelText}>
                {label}
            </span>
            <input 
                required={required}
                type={type}
                placeholder={placeholder}
                value={value} 
                onChange={(onChange)}
                className={style.input}
            />
        </label>
    );
};

export default Input;
