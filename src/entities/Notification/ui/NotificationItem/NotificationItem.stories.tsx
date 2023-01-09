import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item: {
        title: 'Тестовый заголовок',
        description: 'Небольшое, но очень ёмкое описание',
        id: '1',
    },
};
