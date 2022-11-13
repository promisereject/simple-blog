/**
 * Created by Sergei Mitrofanov from rjadysh.com on 20.10.2022
 */

import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducers, ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

// import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducers,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    // Вынести всю логику в фичу EditableProfileCard. Страница должна содержать только разметку
    const
        {
            className,
        } = props;

    const dispatch = useAppDispatch();
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);

    const onChangeName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ name: value || '' }));
    }, [dispatch]);

    const onChangeSurname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ surname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const validationErrors = useSelector(getProfileValidateErrors);

    const validationErrorsTranslation = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка получения данных с сервера'),
        [ValidateProfileError.NO_DATA]: t('Нет данных для отображения'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные значения имени, фамилии или города'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Некорректное значение возраста'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Некорректно указана страна'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page className={classNames('classes.profilePage', {}, [className])}>
                <ProfileHeader />
                {validationErrors?.length && validationErrors.map((error) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validationErrorsTranslation[error]}
                        key={error}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeName={onChangeName}
                    onChangeSurname={onChangeSurname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readOnly={readOnly}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
