import { memo } from 'react';

import classes from './PageLoader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
    const { className } = props;
    return (
        <div className={classNames(classes.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
});
