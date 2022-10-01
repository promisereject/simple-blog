import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Button text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    children: 'Button text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [themeDecorator(Theme.DARK)];
