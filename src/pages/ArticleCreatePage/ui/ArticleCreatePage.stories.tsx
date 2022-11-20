import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleCreatePage from './ArticleCreatePage';

export default {
    title: 'pages/ArticleCreatePage',
    component: ArticleCreatePage,
} as ComponentMeta<typeof ArticleCreatePage>;

const Template: ComponentStory<typeof ArticleCreatePage> = (args) => <ArticleCreatePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
