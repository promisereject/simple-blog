import { Fragment, ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';
import classes from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

const mapPropsToDirectionClass: Record<DropdownDirection, string> = {
    'top left': classes.optionsTopLeft,
    'top right': classes.optionsTopRight,
    'bottom left': classes.optionsBottomLeft,
    'bottom right': classes.optionsBottomRight,
};

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props;

    const optionsAdditional = [
        mapPropsToDirectionClass[direction],
    ];

    return (
        <HStack gap="8" align="center">
            {label && <span className={classNames('', { [classes.disabled]: readonly }, [])}>{`${label}:>`}</span>}
            <Listbox
                as="div"
                className={classNames(classes.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <Listbox.Button disabled={readonly} className={classes.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options
                    className={classNames(classes.options, {}, optionsAdditional)}
                >
                    {items?.map((item) => (
                        <Listbox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    classes.option,
                                    {
                                        [classes.active]: active,
                                        [classes.disabled]: item.disabled,
                                    },
                                    [],
                                )}
                                >
                                    <HStack gap="8" align="center">
                                        {/* eslint-disable-next-line i18next/no-literal-string */}
                                        {selected && <span>&#8627;</span>}
                                        <span>{item.content}</span>
                                    </HStack>
                                </li>
                            )}

                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
}
