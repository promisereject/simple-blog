import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const {
        className,
    } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                <Dropdown
                    direction="bottom right"
                    className={classes.dropdown}
                    items={[
                        {
                            content: t('Профиль'),
                            href: routePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={50} src={authData.avatar} />}
                />
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
