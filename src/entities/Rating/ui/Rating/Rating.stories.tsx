import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Rating } from './Rating';

export default {
    title: 'shared/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};
