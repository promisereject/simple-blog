import { Link, LinkProps } from 'react-router-dom';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

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
