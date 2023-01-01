import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@/shared/ui/Text';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

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
    theme: 'error',
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

export const NormalOrange = Template.bind({});
NormalOrange.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
};
NormalOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    theme: 'error',
};
ErrorDark.decorators = [themeDecorator(Theme.DARK)];

export const ErrorOrange = Template.bind({});
ErrorOrange.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    theme: 'error',
};
ErrorOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Заголовок',
};
OnlyTitleDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTitleOrange = Template.bind({});
OnlyTitleOrange.args = {
    title: 'Заголовок',
};
OnlyTitleOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Описание в одно предложение',
};
OnlyTextDark.decorators = [themeDecorator(Theme.DARK)];

export const OnlyTextOrange = Template.bind({});
OnlyTextOrange.args = {
    text: 'Описание в одно предложение',
};
OnlyTextOrange.decorators = [themeDecorator(Theme.ORANGE)];

export const SizeLNormal = Template.bind({});
SizeLNormal.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    size: 'l',
};

export const SizeLDark = Template.bind({});
SizeLDark.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    size: 'l',
};
SizeLDark.decorators = [themeDecorator(Theme.DARK)];

export const SizeOrange = Template.bind({});
SizeOrange.args = {
    title: 'Заголовок',
    text: 'Описание в одно предложение',
    size: 'l',
};
SizeOrange.decorators = [themeDecorator(Theme.ORANGE)];
