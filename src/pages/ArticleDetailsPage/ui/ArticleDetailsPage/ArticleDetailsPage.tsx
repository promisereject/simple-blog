import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            {t('Страница статьи')}
        </div>
    );
});

export default ArticleDetailsPage;
