import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
    title: 'pages/Articles/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
