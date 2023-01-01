import { CSSProperties, memo, useMemo } from 'react';

import classes from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(classes.avatar, mods, [className])}
        />
    );
});
