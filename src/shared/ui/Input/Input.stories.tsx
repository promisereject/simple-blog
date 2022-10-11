import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
    placeholder: 'Введите логин',
    value: 'ohuel.ru',
};

export const Dark = Template.bind({});

Dark.args = {
    placeholder: 'Введите логин',
    value: 'ohuel.ru',
};

Dark.decorators = [themeDecorator(Theme.DARK)];