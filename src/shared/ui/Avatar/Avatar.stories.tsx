import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import avatar from '../../assets/images/storybook/sergey.webp';

import { Avatar } from '@/shared/ui/Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatar,
};

export const Normal = Template.bind({});
Normal.args = {
    size: 150,
    src: avatar,
};

export const Large = Template.bind({});
Large.args = {
    size: 250,
    src: avatar,
};
