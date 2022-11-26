import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { getCurrentUser } from '../../model/selectors/getCurrentUser';

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
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readOnly
                    ? (
                        <Button
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <HStack gap="16">
                            <Button
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme="outlineRed"
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )
            )}
        </HStack>
    );
};
