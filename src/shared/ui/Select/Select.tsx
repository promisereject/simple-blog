import React, { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: T;
}

interface SelectProps<T extends string> {
    className?: string
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}
// дженерик-пропсы плохо работают с мемо, поэтому компонент не мемоизирован
// TODO: покурить дженерик-пропсы
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options = [],
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = {
        [classes.readOnly]: readonly,
    };

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((option) => (
        <option
            className={classes.option}
            value={option.value}
            key={option.value}
        >
            {option.content}
        </option>
    )), [options]);
    return (
        <div className={classNames(classes.wrapper, mods, [className])}>
            {label && (
                <div className={classes.label}>
                    {label}
                    <span className={classes.chevron}>{'>'}</span>
                </div>
            )}
            <select
                className={classes.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
