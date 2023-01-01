import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/sidebar';

import classes from './SidebarItem.module.scss';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;

}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;

    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme="secondary"
            to={item.path}
            className={classNames(classes.link, { [classes.collapsed]: collapsed })}
        >
            <item.Icon className={classes.icon} />
            <span className={classes.linkName}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
