import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import classes from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

const mapPropsToDirectionClass: Record<DropdownDirection, string> = {
    'top left': classes.optionsTopLeft,
    'top right': classes.optionsTopRight,
    'bottom left': classes.optionsBottomLeft,
    'bottom right': classes.optionsBottomRight,
};

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction,
    } = props;

    const dropdownAdditional = [
        mapPropsToDirectionClass[direction],
    ];
    return (
        <Menu as="div" className={classNames(classes.Dropdown, {}, [className])}>
            <Menu.Button className={classes.button}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(classes.items, {}, dropdownAdditional)}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                classes.item,
                                { [classes.active]: active },
                                [],
                            )}
                        >
                            {item.content}
                        </button>

                    );

                    if (item.href) {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                                {content}
                            </Menu.Item>

                        );
                    }
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>

                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
