import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

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
            direction="top"
            label={t('Выберите валюту')}
        />
    );
});
