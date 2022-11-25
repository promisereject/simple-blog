import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
        <ListBox
            readonly={readonly}
            value={value}
            defaultValue={t('Выберите страну')}
            onChange={onChangeHandler}
            items={countriesList}
            className={classNames(
                '',
                {},
                [className],
            )}
            direction="top right"
            label={t('Выберите страну')}
        />
    );
});
