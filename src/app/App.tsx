import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { getUserInitiated, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export function App() {
    const dispatch = useDispatch();
    const initiated = useSelector(getUserInitiated);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initiated && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
