import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/article';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const navigate = useNavigate();
    const { t } = useTranslation('article');
    const articleData = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (articleData) {
            navigate(getRouteArticleEdit(articleData.id));
        }
    }, [articleData, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                >
                    {t('Редактировать статью')}
                </Button>
            )}
        </HStack>
    );
});
