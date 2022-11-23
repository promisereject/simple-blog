import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

// TODO: Заменить все enum во всём проекте на union типы

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

type SemanticHeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const mapPropsToHeaderTag: Record<SemanticHeaderTagType, SemanticHeaderTagType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h4',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSizes
    titleTag?: SemanticHeaderTagType;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        titleTag = 'p',
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

    const HeaderTag = mapPropsToHeaderTag[titleTag];

    return (
        <div className={classNames(classes.text, {}, additional)}>
            {title && <HeaderTag className={classes.title}>{title}</HeaderTag>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
