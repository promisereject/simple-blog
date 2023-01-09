import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Block = Template.bind({});
Block.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const BlockDark = Template.bind({});
BlockDark.args = {
    width: '100%',
    height: 200,
};
BlockDark.decorators = [themeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [themeDecorator(Theme.DARK)];

export const BlockOrange = Template.bind({});
BlockOrange.args = {
    width: '100%',
    height: 200,
};
BlockOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleOrange.decorators = [themeDecorator(Theme.ORANGE)];
