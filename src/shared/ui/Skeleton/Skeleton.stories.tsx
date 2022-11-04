import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    width: '100%',
    height: 200,
};
DefaultDark.decorators = [themeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleDark.decorators = [themeDecorator(Theme.DARK)];

export const DefaultOrange = Template.bind({});
DefaultOrange.args = {
    width: '100%',
    height: 200,
};
DefaultOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
    borderRadius: '50%',
    width: 100,
    height: 100,
};
CircleOrange.decorators = [themeDecorator(Theme.ORANGE)];
