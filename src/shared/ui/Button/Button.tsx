import { ButtonHTMLAttributes, ReactNode } from 'react';

import classes from './Button.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type ButtonTheme =
    | 'clear'
    | 'clearInverted'
    | 'outline'
    | 'outlineRed'
    | 'background'
    | 'backgroundInverted';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'outline',
        square,
        size = 'size_m',
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes.square]: square,
        [classes[size]]: true,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
    };
    return (
        <button
            type="button"
            className={classNames(classes.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
