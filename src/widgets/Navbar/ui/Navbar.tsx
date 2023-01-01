import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/authByUserName';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationsButton } from '@/features/notificationsButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import classes from './Navbar.module.scss';
import { routePath } from '@/shared/const/router';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const {
        className,
    } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(classes.navbar, {}, [className])}>
                <Text
                    theme="inverted"
                    className={classes.logo}
                    title="APP_LOGO"
                />
                <AppLink
                    theme="secondary"
                    to={routePath.article_create}
                    className={classes.createArticleButton}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="32" className={classes.actions}>
                    <NotificationsButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }
    return (
        <header className={classNames(classes.navbar, {}, [className])}>
            <Text
                theme="inverted"
                className={classes.logo}
                title="APP_LOGO"
            />
            <Button
                theme="clearInverted"
                className={classes.items}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
