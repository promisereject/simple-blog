import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={classes.editButton}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={data?.name}
                    placeholder={t('Ваше имя')}
                    className={classes.input}
                />
                <Input
                    value={data?.surname}
                    placeholder={t('Ваша фамилия')}
                    className={classes.input}
                />
            </div>
        </div>
    );
};
