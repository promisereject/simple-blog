import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import AddCommentForm from './AddCommentForm';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [
    storeDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};
Dark.decorators = [
    storeDecorator({}),
    themeDecorator(Theme.DARK),
];

export const Orange = Template.bind({});
Orange.args = {
    onSendComment: action('onSendComment'),
};
Orange.decorators = [
    storeDecorator({}),
    themeDecorator(Theme.ORANGE),
];
