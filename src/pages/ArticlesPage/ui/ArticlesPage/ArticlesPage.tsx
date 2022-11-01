import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('articles');
    return (
        <div className={classNames(classes.ArticlesPage, {}, [className])}>
            {t('Страница со списком статей')}
        </div>
    );
});

export default ArticlesPage;
