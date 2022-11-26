import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { storeDecorator } from 'shared/config/storybook/decorators/storeDecorator';
import avatar from 'shared/assets/images/storybook/sergey.webp';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const form = {
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
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({
    profile: {
        form,
        readonly: true,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    profile: {
        form,
        readonly: true,
    },
})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    profile: {
        form,
        readonly: true,
    },
})];
