import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentsList } from './CommentsList';

import jessie from '@/shared/assets/images/storybook/jessie.jpeg';
import sergey from '@/shared/assets/images/storybook/sergey.webp';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const comments = [
    {
        id: '1',
        text: 'Комментарий для сторибука от Сергея',
        user: { id: '1', username: 'sergey', avatar: sergey },
    },
    {
        id: '2',
        text: 'Комментарий для сторибука от Джесси',
        user: { id: '2', username: 'jessie', avatar: jessie },
    },
];

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => (
    <CommentsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = { comments };

export const Dark = Template.bind({});
Dark.args = { comments };
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { comments };
Orange.decorators = [themeDecorator(Theme.ORANGE)];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = { comments, isLoading: true };

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = { comments, isLoading: true };
DarkIsLoading.decorators = [themeDecorator(Theme.DARK)];

export const OrangeIsLoading = Template.bind({});
OrangeIsLoading.args = { comments, isLoading: true };
OrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE)];
