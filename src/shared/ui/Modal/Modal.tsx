import React, { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

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
            <div className={classNames(classes.modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
