import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink } from '../../../AppLink/AppLink';
import { mapPropsToDirectionClass } from '../../consts/consts';
import generalClasses from '../../styles/popups.module.scss';

import classes from './Dropdown.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction } = props;

    const dropdownAdditional = [mapPropsToDirectionClass[direction]];
    return (
        <Menu
            as="div"
            className={classNames('', {}, [className, generalClasses.popup])}
        >
            <Menu.Button className={generalClasses.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(classes.items, {}, dropdownAdditional)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                classes.item,
                                { [generalClasses.active]: active },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
