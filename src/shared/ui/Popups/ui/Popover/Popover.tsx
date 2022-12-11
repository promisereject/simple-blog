import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapPropsToDirectionClass } from '../../consts/consts';
import classes from './Popover.module.scss';
import generalClasses from '../../styles/popups.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction: DropdownDirection;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        direction,
        trigger,
        children,
    } = props;

    const popoverAdditional = [
        mapPropsToDirectionClass[direction],
    ];
    return (
        <HPopover className={classNames('', {}, [className, generalClasses.popup])}>
            <HPopover.Button as="div" className={generalClasses.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(classes.panel, {}, popoverAdditional)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
