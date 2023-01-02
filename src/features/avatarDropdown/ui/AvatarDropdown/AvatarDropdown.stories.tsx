import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AvatarDropdown } from './AvatarDropdown';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

// TODO: написать сторикейс
