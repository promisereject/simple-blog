import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapPropsToDirectionClass } from '../../consts/consts';
import generalClasses from '../../styles/popups.module.scss';

import classes from './ListBox.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction: DropdownDirection;
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
        direction,
        label,
    } = props;

    const optionsAdditional = [
        mapPropsToDirectionClass[direction],
    ];

    return (
        <HStack gap="8" align="center">
            {label
                && (
                    <span
                        className={classNames(
                            '',
                            { [generalClasses.disabled]: readonly },
                            [],
                        )}
                    >
                        {`${label}:>`}
                    </span>
                )}
            <Listbox
                as="div"
                className={classNames('', {}, [className, generalClasses.popup])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <Listbox.Button as="div" className={generalClasses.trigger}>
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
                                        [generalClasses.active]: active,
                                        [generalClasses.disabled]: item.disabled,
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
