import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import classes from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 15 : 2)
    .fill(0)
    .map((item, index) => (
        // элемент списка не изменяется и не удаляется, можем использовать индекс в качестве ключа
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton view={view} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
        target,
    } = props;
    const { t } = useTranslation();
    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            article={article}
            view={view}
            key={article.id}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                data-testid="ArticlesList"
                className={classNames(classes.ArticleList, {}, [className, classes[view]])}
            >
                <Text
                    theme="error"
                    title={t('Нет статей')}
                    text={t('Попробуйте расширить поисковый запрос или изменить фильтры')}
                />
            </div>
        );
    }

    return (
        <div
            data-testid="ArticlesList"
            className={classNames(classes.ArticleList, {}, [className, classes[view]])}
        >
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
