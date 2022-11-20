import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import classes from './ArticleDetailsPageHeader.module.scss';

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
        navigate(routePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${routePath.articles}/${articleData?.id}/edit`);
    }, [articleData?.id, navigate]);

    return (
        <div className={classNames(classes.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    className={classes.editButton}
                    onClick={onEditArticle}
                >
                    {t('Редактировать статью')}
                </Button>
            )}
        </div>
    );
});