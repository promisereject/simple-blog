import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentsList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleDetailsComments } from '../../model/slices/articleDetailsCommentsSlice';
import classes from './ArticleDetailsPageComments.module.scss';

interface ArticleDetailsPageCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsPageComments = memo((props: ArticleDetailsPageCommentsProps) => {
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const comments = useSelector(getArticleDetailsComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text
                title={t('Комментарии')}
                size="l"
                className={classes.title}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentsList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});