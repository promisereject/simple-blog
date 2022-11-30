import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import classes from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { isLoading, data: articles, error } = useArticleRecommendationsList(10);

    // TODO: реализовать нормальную обработку загрузки и ошибки
    if (isLoading || error) {
        return null;
    }
    return (
        <VStack gap="16" className={classNames(classes.recommendationsWrapper, {}, [className])}>
            <Text
                className={classes.title}
                title={t('Рекомендуем')}
                size="l"
            />
            <ArticleList
                className={classes.recommendations}
                target="_blank"
                articles={articles}
            />
        </VStack>
    );
});
