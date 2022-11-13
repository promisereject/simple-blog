import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <Page className={classNames(classes.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
