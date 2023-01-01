import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import classes from './Input.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

// решение при конфликте типов
// Omit позволяет забрать из типа все пропсы и исключить те, что не нужны
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'numberOnly'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

// memo позволяет избегать лишних перерисовок
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps

    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onFocusInput = () => {
        setIsFocused(true);
    };

    const onBlurInput = () => {
        setIsFocused(false);
    };

    // из-за отсутствия поддержки нужных типов и в виде исключения используем any
    const onSelectInput = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const isCaretVisible = isFocused && !readOnly;

    const mods: Mods = {
        [classes.readOnly]: readOnly,
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);
    return (
        <div className={classNames(classes.inputContainer, mods, [className])}>
            {placeholder && (
                <div className={classes.placeholder}>
                    {`${placeholder}`}
                    <span className={classes.chevron}>{':>'}</span>
                </div>
            )}
            <div className={classes.inputWrapper}>
                <input
                    ref={ref}
                    className={classes.input}
                    type={type}
                    value={value}
                    onChange={onChangeInput}
                    onBlur={onBlurInput}
                    onFocus={onFocusInput}
                    onSelect={onSelectInput}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={classes.caret}
                        style={{ left: `${caretPosition * 9.6}px` }}
                    />
                )}
            </div>
        </div>
    );
});
