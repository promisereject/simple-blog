import React from 'react';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/sidebar-home-icon.svg';
import AboutIcon from 'shared/assets/icons/sidebar-about-icon.svg';
import ProfileIcon from 'shared/assets/icons/sidebar-profile-icon.svg';

export interface SidebarItemType {
path: string;
text: string;
Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: routePath.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: routePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: routePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
];
