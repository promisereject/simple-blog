import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticlesTabsCategories } from './ArticlesTabsCategories';

import { ArticleType } from '@/entities/Article';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/Article/ArticlesTabsCategories',
    component: ArticlesTabsCategories,
} as ComponentMeta<typeof ArticlesTabsCategories>;

const Template: ComponentStory<typeof ArticlesTabsCategories> = (args) => <ArticlesTabsCategories {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.ALL,
};

export const Dark = Template.bind({});
Dark.args = {
    value: ArticleType.IT,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    value: ArticleType.ECONOMICS,
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
