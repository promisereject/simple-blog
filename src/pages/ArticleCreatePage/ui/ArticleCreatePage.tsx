import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ArticleCreatePage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    return (
        <Page className={classNames(classes.ArticleCreatePage, {}, [className])}>
            {t('Страница создания новой статьи')}
        </Page>

    );
});

export default ArticleCreatePage;
