import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classes from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

type AppLinkTheme = 'primary' | 'secondary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = forwardRef((props:AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
    const {
        to,
        className,
        children,
        theme = 'primary',
        ...otherProps
    } = props;
    return (
        <Link
            ref={ref}
            to={to}
            className={classNames(classes.appLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
