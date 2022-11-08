import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import sergey from 'shared/assets/images/storybook/sergey.webp';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const comment = {
    id: '1',
    text: 'Комментарий для сторибука от Сергея',
    user: { id: '1', username: 'sergey', avatar: sergey },
};

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = { comment };

export const NormalLoading = Template.bind({});
NormalLoading.args = { comment, isLoading: true };

export const Dark = Template.bind({});
Dark.args = { comment };
Dark.decorators = [themeDecorator(Theme.DARK)];

export const DarkLoading = Template.bind({});
DarkLoading.args = { comment, isLoading: true };
DarkLoading.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = { comment };
Orange.decorators = [themeDecorator(Theme.ORANGE)];

export const OrangeLoading = Template.bind({});
OrangeLoading.args = { comment, isLoading: true };
OrangeLoading.decorators = [themeDecorator(Theme.ORANGE)];
