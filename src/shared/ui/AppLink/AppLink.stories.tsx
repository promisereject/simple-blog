import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from '@/shared/ui/AppLink';

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

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button text',
    theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button text',
    theme: 'secondary',
};

export const Red = Template.bind({});
Red.args = {
    children: 'Button text',
    theme: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button text',
    theme: 'primary',
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Button text',
    theme: 'secondary',
};
SecondaryDark.decorators = [themeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Button text',
    theme: 'red',
};
RedDark.decorators = [themeDecorator(Theme.DARK)];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    children: 'Button text',
    theme: 'primary',
};
PrimaryOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const SecondaryOrange = Template.bind({});
SecondaryOrange.args = {
    children: 'Button text',
    theme: 'secondary',
};
SecondaryOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const RedOrange = Template.bind({});
RedOrange.args = {
    children: 'Button text',
    theme: 'red',
};
RedOrange.decorators = [themeDecorator(Theme.ORANGE)];
