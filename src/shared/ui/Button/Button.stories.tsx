import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from './Button';

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

export const DefaultSizeL = Template.bind({});
DefaultSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};

export const DefaultSizeXL = Template.bind({});
DefaultSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button text',
    theme: 'clear',
};

export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_l',
};

export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_xl',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button text',
    theme: 'clearInverted',
};

export const ClearInvertedSizeL = Template.bind({});
ClearInvertedSizeL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_l',
};

export const ClearInvertedSizeXL = Template.bind({});
ClearInvertedSizeXL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_xl',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button text',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button text',
};
OutlineDark.decorators = [themeDecorator(Theme.DARK)];

export const OutlineDarkSizeL = Template.bind({});
OutlineDarkSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};
OutlineDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL = Template.bind({});
OutlineDarkSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};
OutlineDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button text',
    theme: 'background',
};

export const BackgroundThemeSizeL = Template.bind({});
BackgroundThemeSizeL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_l',
};

export const BackgroundThemeSizeXL = Template.bind({});
BackgroundThemeSizeXL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_xl',
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
};

export const BackgroundThemeInvertedSizeL = Template.bind({});
BackgroundThemeInvertedSizeL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_l',
};

export const BackgroundThemeInvertedSizeXL = Template.bind({});
BackgroundThemeInvertedSizeXL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_xl',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button text',
    disabled: true,
};
