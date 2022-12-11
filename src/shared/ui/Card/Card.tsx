import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        max,
        ...otherProps
    } = props;

    const mods = {
        [classes.max]: max,
    };
    return (
        <div
            {...otherProps}
            className={classNames(classes.Card, mods, [className, classes[theme]])}
        >
            {children}
        </div>
    );
};
