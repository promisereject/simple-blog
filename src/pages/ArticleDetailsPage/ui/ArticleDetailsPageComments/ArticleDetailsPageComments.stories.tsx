import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import { ArticleDetailsPageComments } from './ArticleDetailsPageComments';

export default {
    title: 'pages/articles/ArticleDetailsPageComments',
    component: ArticleDetailsPageComments,
} as ComponentMeta<typeof ArticleDetailsPageComments>;

const Template: ComponentStory<typeof ArticleDetailsPageComments> = (args) => <ArticleDetailsPageComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
