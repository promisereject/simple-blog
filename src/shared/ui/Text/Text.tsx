import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Text.module.scss';

// TODO: Заменить все enum во всём проекте на union типы

type TextTheme = 'normal' | 'inverted' | 'error';

type TextAlign = 'left' | 'right' | 'center';

type TextSizes = 'm' | 'l';

type SemanticHeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSizes
    titleTag?: SemanticHeadingTagType;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        titleTag = 'p',
        align = 'left',
        theme = 'normal',
        size = 'm',
    } = props;

    const additional = [
        className,
        classes[theme],
        classes[align],
        classes[size],
    ];

    const HeadingTag = titleTag;

    return (
        <div className={classNames(classes.text, {}, additional)}>
            {title && <HeadingTag className={classes.title}>{title}</HeadingTag>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
