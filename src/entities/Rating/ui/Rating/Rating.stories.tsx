import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Rating } from './Rating';

export default {
    title: 'entities/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
