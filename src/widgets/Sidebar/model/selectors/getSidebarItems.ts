import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/sidebar-about-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/sidebar-articles-icon.svg';
import HomeIcon from '@/shared/assets/icons/sidebar-home-icon.svg';
import ProfileIcon from '@/shared/assets/icons/sidebar-profile-icon.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: HomeIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticlesIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
