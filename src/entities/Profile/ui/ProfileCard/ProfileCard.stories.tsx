import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import avatar from '@/shared/assets/images/storybook/sergey.webp';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const data = {
    name: 'Сергей',
    surname: 'Митрофанов',
    age: 33,
    city: 'Тверь',
    username: 'sergey',
    avatar,
    currency: Currency.RUB,
    country: Country.Russia,
};

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const NormalIsEditing = Template.bind({});
NormalIsEditing.args = {
    data,
};

export const NormalIsReadonly = Template.bind({});
NormalIsReadonly.args = {
    data,
    readOnly: true,
};

export const NormalIsError = Template.bind({});
NormalIsError.args = {
    error: 'true',
};

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = {
    isLoading: true,
};

export const DarkIsEditing = Template.bind({});
DarkIsEditing.args = {
    data,
};
DarkIsEditing.decorators = [themeDecorator(Theme.DARK)];

export const DarkIsReadonly = Template.bind({});
DarkIsReadonly.args = {
    data,
    readOnly: true,
};
DarkIsReadonly.decorators = [themeDecorator(Theme.DARK)];

export const DarkIsError = Template.bind({});
DarkIsError.args = {
    error: 'true',
};
DarkIsError.decorators = [themeDecorator(Theme.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    isLoading: true,
};
DarkIsLoading.decorators = [themeDecorator(Theme.DARK)];

export const OrangeIsEditing = Template.bind({});
OrangeIsEditing.args = {
    data,
};
OrangeIsEditing.decorators = [themeDecorator(Theme.ORANGE)];

export const OrangeIsReadonly = Template.bind({});
OrangeIsReadonly.args = {
    data,
    readOnly: true,
};
OrangeIsReadonly.decorators = [themeDecorator(Theme.ORANGE)];

export const OrangeIsError = Template.bind({});
OrangeIsError.args = {
    error: 'true',
};
OrangeIsError.decorators = [themeDecorator(Theme.ORANGE)];

export const OrangeIsLoading = Template.bind({});
OrangeIsLoading.args = {
    isLoading: true,
};
OrangeIsLoading.decorators = [themeDecorator(Theme.ORANGE)];
