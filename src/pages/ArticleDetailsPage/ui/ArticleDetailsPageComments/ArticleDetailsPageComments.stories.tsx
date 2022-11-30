import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetailsPageComments } from './ArticleDetailsPageComments';

export default {
    title: 'shared/ArticleDetailsPageComments',
    component: ArticleDetailsPageComments,
} as ComponentMeta<typeof ArticleDetailsPageComments>;

const Template: ComponentStory<typeof ArticleDetailsPageComments> = (args) => <ArticleDetailsPageComments {...args} />;

export const Default = Template.bind({});
Default.args = {};
