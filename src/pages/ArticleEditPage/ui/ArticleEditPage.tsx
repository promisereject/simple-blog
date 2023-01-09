import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import classes from './ArticleEditPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    return (
        <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
            {t('Редактирование статьи с id = ') + id}
        </Page>
    );
});

export default ArticleEditPage;
