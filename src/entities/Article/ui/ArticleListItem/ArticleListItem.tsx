import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import ImageDefaultIcon from '../../../../shared/assets/icons/image-default-icon.svg';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import classes from './ArticleListItem.module.scss';

import ArticleViewsIcon from '@/shared/assets/icons/article-views-icon.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation();

    const articleTypes = <Text text={article.type.join(', ')} className={classes.types} />;

    const articleViews = (
        <div className={classes.views}>
            <Text text={String(article.views)} />
            <Icon Svg={ArticleViewsIcon} />
        </div>
    );

    const errorFallback = <Icon Svg={ImageDefaultIcon} width={100} height={100} />;

    if (__PROJECT__ === 'storybook' && view === ArticleView.TILE) {
        return (
            <div className={classNames('', {}, [className, classes[view]])}>
                <Card className={classes.storybookCardWidth}>
                    <div className={classes.imageWrapper}>
                        <img src={article.img} alt={article.title} className={classes.image} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <div className={classes.infoWrapper}>
                        {articleTypes}
                        {articleViews}
                    </div>
                    <Text text={article.title} className={classes.title} />
                </Card>
            </div>
        );
    }

    if (view === ArticleView.BLOCK) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                data-testid="ArticlesListItem"
                className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
            >
                <Card>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={classes.username} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <Text title={article.title} className={classes.title} />
                    {articleTypes}
                    <div className={classes.blockImageWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} borderRadius="12px" />}
                            errorFallback={errorFallback}
                            src={article.img}
                            alt={article.title}
                            className={classes.image}
                        />
                    </div>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button>{t('Читать далее')}</Button>
                        </AppLink>
                        {articleViews}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            data-testid="ArticlesListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
        >
            <Card>
                <div className={classes.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} borderRadius="12px" />}
                        errorFallback={errorFallback}
                        src={article.img}
                        alt={article.title}
                        className={classes.image}
                    />
                    <Text text={article.createdAt} className={classes.date} />
                </div>
                <div className={classes.infoWrapper}>
                    {articleTypes}
                    {articleViews}
                </div>
                <Text text={article.title} className={classes.title} />
            </Card>
        </AppLink>
    );
});
