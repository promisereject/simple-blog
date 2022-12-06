import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}>Сообщение</Popover>;

export const Default = Template.bind({});
Default.args = {};

// TODO: написать сторикейс
