import { CSSProperties, memo } from 'react';

import classes from './Skeleton.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        borderRadius,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };
    return (
        <div
            style={styles}
            className={classNames(classes.Skeleton, {}, [className])}
        />
    );
});
