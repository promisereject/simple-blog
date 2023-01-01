/**
 * Created by Sergei Mitrofanov from rjadysh.com on 28.09.2022
 */

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
    className?: string
}

export const PageError = memo((props: PageErrorProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(classes.PageError, {}, [className])}>
            <p
                className={classNames(classes.message, {}, [])}
            >
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
