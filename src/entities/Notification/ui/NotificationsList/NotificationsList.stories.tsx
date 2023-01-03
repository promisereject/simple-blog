import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationsList } from './NotificationsList';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Важно!',
                    description: 'Вы прочитали первое уведомление',
                    userId: '1',
                },
                {
                    id: '2',
                    title: 'Про админку',
                    description: 'Можно нажать и перейти в панель администратора прямо отсюда',
                    userId: '2',
                    href: '/admin',
                },
                {
                    id: '3',
                    title: 'Про статьи',
                    description: 'Можно нажать и перейти к списку статей прямо отсюда',
                    userId: '1',
                    href: '/articles',
                },
                {
                    id: '4',
                    title: 'Очень важно!',
                    description: 'Вы прочитали последнее уведомление',
                    userId: '2',
                },
            ],
        },
    ],
};
