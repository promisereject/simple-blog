import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { profileActions, profileReducers } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducers,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
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
        <DynamicModuleLoader reducers={reducers}>
            <VStack max gap="32" className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validationErrors?.length && validationErrors.map((error) => (
                    <Text
                        theme="error"
                        text={validationErrorsTranslation[error]}
                        key={error}
                        data-testid="EditableProfileCard.Error"
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
            </VStack>
        </DynamicModuleLoader>
    );
});
