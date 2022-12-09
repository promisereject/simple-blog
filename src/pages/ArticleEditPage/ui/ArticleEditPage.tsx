import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    return (
        <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
            {t('Редактирование статьи с id = ') + id}
        </Page>
    );
});

export default ArticleEditPage;
