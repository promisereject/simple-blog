import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import classes from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        ...otherProps
    } = props;
    return (
        <div
            {...otherProps}
            className={classNames(classes.Card, {}, [className, classes[theme]])}
        >
            {children}
        </div>
    );
};
