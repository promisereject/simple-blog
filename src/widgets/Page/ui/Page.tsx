import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { getScrollPositionByPathName } from '../model/selectors/getScrollPosition';
import { saveScrollPositionActions } from '../model/slices/saveScrollPositionSlice';
import classes from './Page.module.scss';

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
    removeScrollSaving?: boolean;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        removeScrollSaving,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollPositionByPathName(state, pathname),
    );

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        if (!removeScrollSaving) {
            dispatch(saveScrollPositionActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }));
        }
    }, 500);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            onScroll={onScrollHandler}
            className={classNames(classes.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={classes.triggerRef} ref={triggerRef} /> : null}
        </main>
    );
};
