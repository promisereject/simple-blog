import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({
    user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    user: { authData: {} },
})];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({
    user: { authData: {} },
})];

export const NoAuthNormal = Template.bind({});
NoAuthNormal.args = {};
NoAuthNormal.decorators = [storeDecorator({
    user: {},
})];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
    user: {},
})];

export const NoAuthOrange = Template.bind({});
NoAuthOrange.args = {};
NoAuthOrange.decorators = [themeDecorator(Theme.ORANGE), storeDecorator({
    user: {},
})];
