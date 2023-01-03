import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <Page data-testid="NotFoundPage" className={classNames(classes.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
