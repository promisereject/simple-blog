import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'shared/NotificationsList',
    component: NotificationsList,
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Default = Template.bind({});
Default.args = {};
