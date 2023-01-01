import { memo } from 'react';

import { ArticleTextBlock } from '../../model/types/article';

import classes from './ArticleTextBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
            {
                block.title && (
                    <Text title={block.title} className={classes.title} />
                )
            }
            {
                block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} className={classes.paragraph} />
                ))
            }
        </div>
    );
});
