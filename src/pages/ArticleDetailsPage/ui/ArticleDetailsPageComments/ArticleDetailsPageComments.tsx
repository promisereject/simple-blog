import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsComments } from '../../model/slices/articleDetailsCommentsSlice';

import classes from './ArticleDetailsPageComments.module.scss';

import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ArticleDetailsPageCommentsProps {
    className?: string;
    id?: string;
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
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentsList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
