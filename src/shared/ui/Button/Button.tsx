import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './Button.module.scss';

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'outlineRed' | 'background' | 'backgroundInverted';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'outline',
        square,
        size = 'size_m',
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes.square]: square,
        [classes[size]]: true,
        [classes.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={
                classNames(classes.button, mods, [className])
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
