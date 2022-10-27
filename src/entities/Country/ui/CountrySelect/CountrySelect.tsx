import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const countriesList = useMemo(() => (Object.keys(Country) as (keyof typeof Country)[]).map(
        (key) => ({
            value: Country[key], content: Country[key],
        }),
    ), []);

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            label={t('Выберите страну')}
            options={countriesList}
            className={classNames(
                '',
                {},
                [className],
            )}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
