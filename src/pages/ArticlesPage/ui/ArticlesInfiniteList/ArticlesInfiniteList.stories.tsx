import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
    title: 'pages/Articles/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Default = Template.bind({});
Default.args = {};
