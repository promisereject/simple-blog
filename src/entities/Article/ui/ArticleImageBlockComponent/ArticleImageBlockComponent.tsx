import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block?.title} className={classes.image} />
            {block.title && (
                <Text text={block.title} align="center" />
            )}
        </div>
    );
});
