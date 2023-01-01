import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
