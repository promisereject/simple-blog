import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    return (
        <div
            {...otherProps}
            className={classNames(classes.Card, {}, [className])}
        >
            {children}
        </div>
    );
};
