import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { NotFoundPage } from '@/pages/NotFoundPage';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
