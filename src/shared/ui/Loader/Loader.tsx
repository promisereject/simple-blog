import { memo } from 'react';

import classes from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames(classes.loader, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
));
