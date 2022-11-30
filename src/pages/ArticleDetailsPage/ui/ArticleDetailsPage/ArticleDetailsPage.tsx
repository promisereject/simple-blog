import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import { articleDetailsPageReducers } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    // type guard
    if (!id) {
        return (
            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <VStack max align="center" justify="center">
                    <Text theme="error" text={t('Статья не найдена')} />
                </VStack>
            </Page>
        );
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <VStack max gap="32">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsPageComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
