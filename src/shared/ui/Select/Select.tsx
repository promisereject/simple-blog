import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(event.target.value);
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
});
