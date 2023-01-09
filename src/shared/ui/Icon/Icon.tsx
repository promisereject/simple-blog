import React, { memo } from 'react';

import classes from './Icon.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    return (
        <Svg
            className={classNames(
                inverted ? classes.inverted : classes.Icon,
                {},
                [className],
            )}
            {...otherProps}
        />
    );
});
