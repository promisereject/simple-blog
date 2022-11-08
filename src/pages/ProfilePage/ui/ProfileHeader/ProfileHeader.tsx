import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCurrentUser } from 'pages/ProfilePage/model/selectors/getCurrentUser';
import classes from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
    className?: string
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const canEdit = useSelector(getCurrentUser);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(classes.profileHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readOnly
                    ? (
                        <div className={classes.controls}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        </div>
                    )
                    : (
                        <div className={classes.controls}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )
            )}
        </div>
    );
};
