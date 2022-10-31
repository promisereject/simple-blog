import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/images/storybook/avatar.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Editing = Template.bind({});
Editing.args = {
    data: {
        name: 'Сергей',
        surname: 'Митрофанов',
        age: 33,
        city: 'Тверь',
        username: 'sergey',
        avatar,
        currency: Currency.RUB,
        country: Country.Russia,
    },
};

export const Readonly = Template.bind({});
Readonly.args = {
    data: {
        name: 'Сергей',
        surname: 'Митрофанов',
        age: 33,
        city: 'Тверь',
        username: 'sergey',
        avatar: 'https://rjadysh.com/wp-content/uploads/rjadyshcom-glavnaja-1.png',
        currency: Currency.RUB,
        country: Country.Russia,
    },
    readOnly: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
