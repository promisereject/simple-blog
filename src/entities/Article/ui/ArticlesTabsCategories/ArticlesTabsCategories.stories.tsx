import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesTabsCategories } from './ArticlesTabsCategories';

export default {
    title: 'entities/Article/ArticlesTabsCategories',
    component: ArticlesTabsCategories,
} as ComponentMeta<typeof ArticlesTabsCategories>;

const Template: ComponentStory<typeof ArticlesTabsCategories> = (args) => <ArticlesTabsCategories {...args} />;

export const Default = Template.bind({});
Default.args = {};
