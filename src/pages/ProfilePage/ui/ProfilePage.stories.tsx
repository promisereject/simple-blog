import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { ProfilePage } from '@/pages/ProfilePage';
import avatar from '@/shared/assets/images/storybook/sergey.webp';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

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
Normal.decorators = [
    storeDecorator({
        profile: {
            form,
            readonly: true,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({
        profile: {
            form,
            readonly: true,
        },
    }),
];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({
        profile: {
            form,
            readonly: true,
        },
    }),
];
