import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};

// TODO: написать сторикейс
