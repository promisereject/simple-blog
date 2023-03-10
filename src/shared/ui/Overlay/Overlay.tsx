import { memo } from 'react';

import classes from './Overlay.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    isOpening?: boolean;
    isClosing?: boolean;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick, isOpening, isClosing } = props;

    const mods: Mods = {
        [classes.opening]: isOpening,
        [classes.closing]: isClosing,
    };

    return (
        <div
            onClick={onClick}
            className={classNames(classes.Overlay, mods, [className])}
        />
    );
});
