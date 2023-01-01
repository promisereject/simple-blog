import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import avatar from '@/shared/assets/images/storybook/sergey.webp';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { Navbar } from '@/widgets/Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({})];

export const NormalAuth = Template.bind({});
NormalAuth.args = {};
NormalAuth.decorators = [storeDecorator({ user: { authData: { avatar } } })];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [themeDecorator(Theme.DARK), storeDecorator({ user: { authData: { avatar } } })];

export const OrangeAuth = Template.bind({});
OrangeAuth.args = {};
OrangeAuth.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({ user: { authData: { avatar } } })];
