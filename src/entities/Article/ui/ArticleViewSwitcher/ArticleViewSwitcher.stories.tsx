import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'shared/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
