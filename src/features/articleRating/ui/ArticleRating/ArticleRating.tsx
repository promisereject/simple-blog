import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        articleId,
    } = props;

    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const rateArticleHandler = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onRateAccept = useCallback((starsCount: number, feedback?: string) => {
        rateArticleHandler(starsCount, feedback);
    }, [rateArticleHandler]);

    const onRateCancel = useCallback((starsCount: number) => {
        rateArticleHandler(starsCount);
    }, [rateArticleHandler]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={150} />
        );
    }

    const rating = data?.[0];

    return (
        <Rating
            hasFeedback
            onAccept={onRateAccept}
            onCancel={onRateCancel}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Ваш отзыв')}
            className={classNames('', {}, [className])}
        />
    );
});

export default ArticleRating;
