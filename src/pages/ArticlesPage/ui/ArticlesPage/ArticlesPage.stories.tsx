import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/Articles/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [storeDecorator({})];
