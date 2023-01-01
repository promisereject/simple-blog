import { memo } from 'react';

import classes from './Text.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type TextTheme = 'normal' | 'inverted' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type TextSizes = 'm' | 'l';
type TextGap = '4' | '8' | '16';
type SemanticHeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    gap?: TextGap;
    align?: TextAlign;
    size?: TextSizes
    titleTag?: SemanticHeadingTagType;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        titleTag = 'p',
        align = 'left',
        theme = 'normal',
        gap = '4',
        size = 'm',
        'data-testid': dataTestId = 'Text',
    } = props;

    const gapClasses: Record<TextGap, string> = {
        4: classes.gap4,
        8: classes.gap8,
        16: classes.gap16,
    };

    const additional = [
        className,
        classes[theme],
        classes[gap],
        classes[align],
        classes[size],
        gap && gapClasses[gap],
    ];

    const HeadingTag = titleTag;

    return (
        <div className={classNames(classes.text, {}, additional)}>
            {title && (
                <HeadingTag
                    data-testid={`${dataTestId}.Heading`}
                    className={classes.title}
                >
                    {title}
                </HeadingTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={classes.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
