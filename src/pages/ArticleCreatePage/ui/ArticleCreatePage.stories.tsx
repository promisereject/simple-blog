import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ArticleCreatePage from './ArticleCreatePage';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/Articles/ArticleCreatePage',
    component: ArticleCreatePage,
} as ComponentMeta<typeof ArticleCreatePage>;

const Template: ComponentStory<typeof ArticleCreatePage> = (args) => <ArticleCreatePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({})];
