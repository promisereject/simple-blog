import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/authByUserName/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '12345' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    loginForm: { username: 'admin', password: '12345' },
})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({
    loginForm: { username: 'admin', password: '12345' },
})];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = {};
NormalIsLoading.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '12345', isLoading: true },
})];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {};
DarkIsLoading.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    loginForm: { username: 'admin', password: '12345', isLoading: true },
})];

export const OrangeIsLoading = Template.bind({});
OrangeIsLoading.args = {};
OrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({
    loginForm: { username: 'admin', password: '12345', isLoading: true },
})];

export const NormalWithError = Template.bind({});
NormalWithError.args = {};
NormalWithError.decorators = [storeDecorator({
    loginForm: { username: 'admin', password: '12345', error: 'неверный логин или пароль' },
})];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    loginForm: { username: 'admin', password: '12345', error: 'неверный логин или пароль' },
})];

export const OrangeWithError = Template.bind({});
OrangeWithError.args = {};
OrangeWithError.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({
    loginForm: { username: 'admin', password: '12345', error: 'неверный логин или пароль' },
})];
