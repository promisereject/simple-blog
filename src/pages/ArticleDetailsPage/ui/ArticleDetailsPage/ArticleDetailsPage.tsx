import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextSizes } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { getArticleDetailsError } from 'entities/Article/model/selectors/articleDetails';
import { Page } from 'widgets/Page';
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slices';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleDetailsComments } from '../../model/slices/articleDetailsCommentsSlice';
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

    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { id = '1' } = useParams<{id: string}>();
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    const error = useSelector(getArticleDetailsError);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onBackToList = useCallback(() => {
        navigate(routePath.articles);
    }, [navigate]);

    // TODO: условие отключает отображение статьи в сторибуке. Не забыть замокать стейт в сторикейсе

    if (!id) {
        return (
            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id} />
                {!error && (
                    <div className={classes.extraWrapper}>
                        <Text
                            className={classes.commentsTitle}
                            title={t('Рекомендуем')}
                            size={TextSizes.L}
                        />
                        <ArticleList
                            target="_blank"
                            articles={recommendations}
                            isLoading={recommendationsIsLoading}
                            className={classes.recommendations}
                        />
                        <Text
                            className={classes.commentsTitle}
                            title={t('Комментарии')}
                            size={TextSizes.L}
                        />
                        <AddCommentForm onSendComment={onSendComment} />
                        <CommentsList
                            isLoading={commentsIsLoading}
                            comments={comments}
                        />
                    </div>
                )}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
