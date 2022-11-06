import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentsList } from './CommentsList';

export default {
    title: 'shared/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Default = Template.bind({});
Default.args = {};
