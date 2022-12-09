import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'shared/NotificationItem',
    component: NotificationItem,
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Default = Template.bind({});
Default.args = {};