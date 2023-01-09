import { CSSProperties, memo, useMemo } from 'react';

import UserAvatarDefault from '../../assets/icons/user-avatar-default-icon.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import classes from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size = 100, fallbackInverted } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserAvatarDefault}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(classes.avatar, mods, [className])}
        />
    );
});
