import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { PageError } from '@/widgets/PageError';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
