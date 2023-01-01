import React, { ReactNode, useCallback, useEffect } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import classes from './Drawer.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight;

// в DrawerContent ждём загрузки библиотек
const DrawerContent = (props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();
    const open = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const close = useCallback((velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: {
                ...Spring.config.stiff,
                velocity,
            },
            onResolve: onClose,
        });
    }, [Spring.config.stiff, api, onClose]);

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    open();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    useEffect(() => {
        if (isOpen) open();
    }, [isOpen, open]);

    if (!isOpen) return null;

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(classes.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay
                    isOpening={isOpen}
                    onClick={() => close()}
                />
                <Spring.a.div
                    className={classes.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

// в DrawerAsync загружаем библиотеки и обрабатываем ошибки
const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    // TODO: обработать ошибку
    if (!isLoaded) return null;

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
