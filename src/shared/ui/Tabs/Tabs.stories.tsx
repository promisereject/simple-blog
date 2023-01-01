import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'Вкладка 1',
            content: 'Контент вкладки 1',
        },
        {
            value: 'Вкладка 2',
            content: 'Контент вкладки 2',
        },
        {
            value: 'Вкладка 3',
            content: 'Контент вкладки 3',
        },
    ],
    value: 'Вкладка 2',
    onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'Вкладка 1',
            content: 'Контент вкладки 1',
        },
        {
            value: 'Вкладка 2',
            content: 'Контент вкладки 2',
        },
        {
            value: 'Вкладка 3',
            content: 'Контент вкладки 3',
        },
    ],
    value: 'Вкладка 2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    tabs: [
        {
            value: 'Вкладка 1',
            content: 'Контент вкладки 1',
        },
        {
            value: 'Вкладка 2',
            content: 'Контент вкладки 2',
        },
        {
            value: 'Вкладка 3',
            content: 'Контент вкладки 3',
        },
    ],
    value: 'Вкладка 2',
    onTabClick: action('onTabClick'),
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
