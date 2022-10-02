import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/sidebar-home-icon.svg';
import AboutIcon from 'shared/assets/icons/sidebar-about-icon.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    classes.sidebar,
                    { [classes.collapsed]: collapsed },
                    [className],
                )
            }
        >

            <div className={classes.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={routePath.main}
                    className={classes.link}
                >
                    <HomeIcon className={classes.icon} />
                    <span className={classes.linkName}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={routePath.about}
                    className={classes.link}
                >
                    <AboutIcon className={classes.icon} />
                    <span className={classes.linkName}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classes.collapseButton}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    );
};
