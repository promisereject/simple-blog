import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/Articles/ArticleEditPage',
    component: ArticleEditPage,
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
