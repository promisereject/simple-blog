import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { AboutPage } from '@/pages/AboutPage';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({})];
