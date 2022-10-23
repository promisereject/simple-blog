/**
 * Created by Sergei Mitrofanov from rjadysh.com on 20.10.2022
 */

import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducers } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    const
        {
            className,
        } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames('classes.profilePage', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
