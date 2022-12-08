import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import classes from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props;
    const { theme } = useTheme();
    const {
        close, isOpening, isClosing, isMounted,
    } = useModal({ animationDelay: 300, onClose, isOpen });

    const mods: Mods = {
        [classes.opened]: isOpening,
        [classes.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={classes.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
