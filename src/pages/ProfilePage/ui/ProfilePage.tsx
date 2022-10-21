/**
 * Created by Sergei Mitrofanov from rjadysh.com on 20.10.2022
 */

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducers } from 'entities/Profile';
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

    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames('classes.profilePage', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
