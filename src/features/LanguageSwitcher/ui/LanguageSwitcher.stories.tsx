import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
    <LanguageSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.decorators = [themeDecorator(Theme.ORANGE)];
