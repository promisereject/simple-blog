import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleDetailsPageComments } from './ArticleDetailsPageComments';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'pages/articles/ArticleDetailsPageComments',
    component: ArticleDetailsPageComments,
} as ComponentMeta<typeof ArticleDetailsPageComments>;

const Template: ComponentStory<typeof ArticleDetailsPageComments> = (args) => <ArticleDetailsPageComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
