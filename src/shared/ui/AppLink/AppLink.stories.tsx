import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Button text',
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});

Red.args = {
    children: 'Button text',
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Button text',
    theme: AppLinkTheme.PRIMARY,
};

PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'Button text',
    theme: AppLinkTheme.SECONDARY,
};

SecondaryDark.decorators = [themeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});

RedDark.args = {
    children: 'Button text',
    theme: AppLinkTheme.RED,
};

RedDark.decorators = [themeDecorator(Theme.DARK)];
