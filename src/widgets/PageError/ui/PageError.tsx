/**
 * Created by Sergei Mitrofanov from rjadysh.com on 28.09.2022
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
import classes from './PageError.module.scss';

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
