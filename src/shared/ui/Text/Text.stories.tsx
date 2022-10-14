import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
};

export const Error = Template.bind({});

Error.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: 'Заголовок',
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: 'Описание в одно предложение',
};

export const NormalDark = Template.bind({});

NormalDark.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
};

NormalDark.decorators = [themeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});

ErrorDark.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    theme: TextTheme.ERROR,
};

ErrorDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: 'Заголовок',
};

OnlyTitleDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
    text: 'Описание в одно предложение',
};

OnlyTextDark.decorators = [themeDecorator(Theme.DARK)];
