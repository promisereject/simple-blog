import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '@/shared/ui/Modal';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const children = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur dolores eos eum ex labore magni necessitatibus praesentium sint sunt?';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children,
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children,
    isOpen: true,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    children,
    isOpen: true,
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
