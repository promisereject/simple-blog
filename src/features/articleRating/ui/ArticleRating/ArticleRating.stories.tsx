import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Default = Template.bind({});
Default.args = {};
