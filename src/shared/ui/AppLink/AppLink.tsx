import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import classes from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = (props:AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = 'primary',
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(classes.appLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
