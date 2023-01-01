import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const currencyList = useMemo(() => (Object.keys(Currency) as (keyof typeof Currency)[]).map(
        (key) => ({
            value: Currency[key], content: Currency[key],
        }),
    ), []);

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            value={value}
            defaultValue={t('Выберите валюту')}
            items={currencyList}
            onChange={onChangeHandler}
            className={classNames(
                '',
                {},
                [className],
            )}
            readonly={readonly}
            direction="top left"
            label={t('Выберите валюту')}
        />
    );
});
