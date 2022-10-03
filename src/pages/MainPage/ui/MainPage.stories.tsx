import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from 'pages/MainPage/ui/MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
    <MainPage {...args} />
);

export const Normal = Template.bind({});

Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [themeDecorator(Theme.DARK)];
