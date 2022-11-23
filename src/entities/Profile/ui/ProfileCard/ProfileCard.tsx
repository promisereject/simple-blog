import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { validateNumbers } from '../../model/lib/validateNumbers/validateNumbers';
import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string | undefined;
    isLoading?: boolean;
    onChangeName?: (value: string) => void;
    onChangeSurname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readOnly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        error,
        isLoading,
        className,
        onChangeName,
        onChangeSurname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readOnly,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [classes.editing]: !readOnly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(classes.profileCard, { [classes.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(classes.profileCard, { }, [className, classes.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(classes.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt={data?.username} size={150} />
                </HStack>
            )}
            <Input
                value={data?.name}
                placeholder={t('Ваше имя')}
                className={classes.input}
                onChange={onChangeName}
                readOnly={readOnly}
            />
            <Input
                value={data?.surname}
                placeholder={t('Ваша фамилия')}
                className={classes.input}
                onChange={onChangeSurname}
                readOnly={readOnly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={classes.input}
                onChange={onChangeAge}
                readOnly={readOnly}
                onKeyPress={validateNumbers}

            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={classes.input}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={classes.input}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                className={classes.input}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />

            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readOnly}
            />

            <CountrySelect
                value={data?.country}
                readonly={readOnly}
                onChange={onChangeCountry}
            />
        </VStack>
    );
};
