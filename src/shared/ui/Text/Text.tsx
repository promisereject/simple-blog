import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSizes {
    M = 'm',
    L = 'l'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSizes
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.NORMAL,
        size = TextSizes.M,
    } = props;

    const additional = [
        className,
        classes[theme],
        classes[align],
        classes[size],
    ];

    return (
        <div className={classNames(classes.text, {}, additional)}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
