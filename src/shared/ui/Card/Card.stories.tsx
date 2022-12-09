import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@/shared/ui/Text/Text';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Заголовок карточки" text="Подзаголовок карточки" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Заголовок карточки" text="Подзаголовок карточки" />,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children: <Text title="Заголовок карточки" text="Подзаголовок карточки" />,
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
