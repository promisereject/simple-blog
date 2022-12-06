import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsButton } from './NotificationsButton';

export default {
    title: 'features/NotificationsButton',
    component: NotificationsButton,
} as ComponentMeta<typeof NotificationsButton>;

const Template: ComponentStory<typeof NotificationsButton> = (args) => <NotificationsButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

// TODO: написать сторикейс
