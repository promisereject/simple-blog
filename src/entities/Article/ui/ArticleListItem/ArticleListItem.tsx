import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import ArticleViewsIcon from 'shared/assets/icons/article-views-icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import classes from './ArticleListItem.module.scss';

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
            <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
                <Card>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={classes.username} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <Text title={article.title} className={classes.title} />
                    {articleTypes}
                    <img src={article.img} alt={article.title} className={classes.image} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <AppLink
                            target={target}
                            to={routePath.article_details + article.id}
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
            target={target}
            to={routePath.article_details + article.id}
            className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
        >
            <Card>
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
        </AppLink>
    );
});
