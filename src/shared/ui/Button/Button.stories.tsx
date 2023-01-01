import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Button text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button text',
    theme: 'clear',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button text',
    theme: 'clearInverted',
};
export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button text',
    theme: 'background',
};
export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button text',
    disabled: true,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    children: 'Button text',
};
NormalDark.decorators = [themeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button text',
    theme: 'clear',
};
ClearDark.decorators = [themeDecorator(Theme.DARK)];

export const ClearDarkInverted = Template.bind({});
ClearDarkInverted.args = {
    children: 'Button text',
    theme: 'clearInverted',
};
ClearDarkInverted.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    children: 'Button text',
    theme: 'background',
};
BackgroundThemeDark.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeDarkInverted = Template.bind({});
BackgroundThemeDarkInverted.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
};
BackgroundThemeDarkInverted.decorators = [themeDecorator(Theme.DARK)];

export const SquareDark = Template.bind({});
SquareDark.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
};
SquareDark.decorators = [themeDecorator(Theme.DARK)];

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    children: 'Button text',
    disabled: true,
};
DisabledDark.decorators = [themeDecorator(Theme.DARK)];

export const NormalOrange = Template.bind({});
NormalOrange.args = {
    children: 'Button text',
};
NormalOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const ClearOrange = Template.bind({});
ClearOrange.args = {
    children: 'Button text',
    theme: 'clear',
};
ClearOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const ClearOrangeInverted = Template.bind({});
ClearOrangeInverted.args = {
    children: 'Button text',
    theme: 'clearInverted',
};
ClearOrangeInverted.decorators = [themeDecorator(Theme.ORANGE)];

export const BackgroundThemeOrange = Template.bind({});
BackgroundThemeOrange.args = {
    children: 'Button text',
    theme: 'background',
};
BackgroundThemeOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const BackgroundThemeOrangeInverted = Template.bind({});
BackgroundThemeOrangeInverted.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
};
BackgroundThemeOrangeInverted.decorators = [themeDecorator(Theme.ORANGE)];

export const SquareOrange = Template.bind({});
SquareOrange.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
};
SquareOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const DisabledOrange = Template.bind({});
DisabledOrange.args = {
    children: 'Button text',
    disabled: true,
};
DisabledOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const NormalSizeL = Template.bind({});
NormalSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};

export const NormalSizeXL = Template.bind({});
NormalSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};

export const NormalDarkSizeL = Template.bind({});
NormalDarkSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};
NormalDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const NormalDarkSizeXL = Template.bind({});
NormalDarkSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};
NormalDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const NormalOrangeSizeL = Template.bind({});
NormalOrangeSizeL.args = {
    children: 'Button text',
    size: 'size_l',
};
NormalOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const NormalOrangeSizeXL = Template.bind({});
NormalOrangeSizeXL.args = {
    children: 'Button text',
    size: 'size_xl',
};
NormalOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];

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

export const ClearDarkSizeL = Template.bind({});
ClearDarkSizeL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_l',
};
ClearDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const ClearDarkSizeXL = Template.bind({});
ClearDarkSizeXL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_xl',
};
ClearDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const ClearOrangeSizeL = Template.bind({});
ClearOrangeSizeL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_l',
};
ClearOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const ClearOrangeSizeXL = Template.bind({});
ClearOrangeSizeXL.args = {
    children: 'Button text',
    theme: 'clear',
    size: 'size_xl',
};
ClearOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];

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

export const ClearInvertedDarkSizeL = Template.bind({});
ClearInvertedDarkSizeL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_l',
};
ClearInvertedDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const ClearInvertedDarkSizeXL = Template.bind({});
ClearInvertedDarkSizeXL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_xl',
};
ClearInvertedDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const ClearInvertedOrangeSizeL = Template.bind({});
ClearInvertedOrangeSizeL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_l',
};
ClearInvertedOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const ClearInvertedOrangeSizeXL = Template.bind({});
ClearInvertedOrangeSizeXL.args = {
    children: 'Button text',
    theme: 'clearInverted',
    size: 'size_xl',
};
ClearInvertedOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];

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

export const BackgroundThemeDarkSizeL = Template.bind({});
BackgroundThemeDarkSizeL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_l',
};
BackgroundThemeDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeDarkSizeXL = Template.bind({});
BackgroundThemeDarkSizeXL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_xl',
};
BackgroundThemeDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeOrangeSizeL = Template.bind({});
BackgroundThemeOrangeSizeL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_l',
};
BackgroundThemeOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const BackgroundThemeOrangeSizeXL = Template.bind({});
BackgroundThemeOrangeSizeXL.args = {
    children: 'Button text',
    theme: 'background',
    size: 'size_xl',
};
BackgroundThemeOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];

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

export const BackgroundThemeInvertedDarkSizeL = Template.bind({});
BackgroundThemeInvertedDarkSizeL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_l',
};
BackgroundThemeInvertedDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeInvertedDarkSizeXL = Template.bind({});
BackgroundThemeInvertedDarkSizeXL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_xl',
};
BackgroundThemeInvertedDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const BackgroundThemeInvertedOrangeSizeL = Template.bind({});
BackgroundThemeInvertedOrangeSizeL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_l',
};
BackgroundThemeInvertedOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const BackgroundThemeInvertedOrangeSizeXL = Template.bind({});
BackgroundThemeInvertedOrangeSizeXL.args = {
    children: 'Button text',
    theme: 'backgroundInverted',
    size: 'size_xl',
};
BackgroundThemeInvertedOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];

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

export const SquareDarkSizeL = Template.bind({});
SquareDarkSizeL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_l',
};
SquareDarkSizeL.decorators = [themeDecorator(Theme.DARK)];

export const SquareDarkSizeXL = Template.bind({});
SquareDarkSizeXL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_xl',
};
SquareDarkSizeXL.decorators = [themeDecorator(Theme.DARK)];

export const SquareOrangeSizeL = Template.bind({});
SquareOrangeSizeL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_l',
};
SquareOrangeSizeL.decorators = [themeDecorator(Theme.ORANGE)];

export const SquareOrangeSizeXL = Template.bind({});
SquareOrangeSizeXL.args = {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'size_xl',
};
SquareOrangeSizeXL.decorators = [themeDecorator(Theme.ORANGE)];
