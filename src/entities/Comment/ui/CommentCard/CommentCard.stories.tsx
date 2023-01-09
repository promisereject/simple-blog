import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

import sergey from '@/shared/assets/images/storybook/sergey.webp';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const comment = {
    id: '1',
    text: 'Комментарий для сторибука от Сергея',
    user: { id: '1', username: 'sergey', avatar: sergey },
};

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = { comment };

export const Dark = Template.bind({});
Dark.args = { comment };
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { comment };
Orange.decorators = [themeDecorator(Theme.ORANGE)];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = { comment, isLoading: true };

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = { comment, isLoading: true };
DarkIsLoading.decorators = [themeDecorator(Theme.DARK)];

export const OrangeIsLoading = Template.bind({});
OrangeIsLoading.args = { comment, isLoading: true };
OrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE)];
