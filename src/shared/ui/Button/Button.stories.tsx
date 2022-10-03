import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    size: ButtonSize.L,
};

export const DefaultSizeXL = Template.bind({});
DefaultSizeXL.args = {
    children: 'Button text',
    size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR,
};

export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};

export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedSizeL = Template.bind({});
ClearInvertedSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSize.L,
};

export const ClearInvertedSizeXL = Template.bind({});
ClearInvertedSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.CLEAR_INVERTED,
    size: ButtonSize.XL,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [themeDecorator(Theme.DARK)];

export const OutlineDarkSizeL = Template.bind({});
OutlineDarkSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
OutlineDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL = Template.bind({});
OutlineDarkSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
OutlineDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeSizeL = Template.bind({});
BackgroundThemeSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L,
};

export const BackgroundThemeSizeXL = Template.bind({});
BackgroundThemeSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL,
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundThemeInvertedSizeL = Template.bind({});
BackgroundThemeInvertedSizeL.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};

export const BackgroundThemeInvertedSizeXL = Template.bind({});
BackgroundThemeInvertedSizeXL.args = {
    children: 'Button text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
