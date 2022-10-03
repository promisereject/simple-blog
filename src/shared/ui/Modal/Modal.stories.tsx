import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/decorators/themeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur dolores eos eum ex labore magni necessitatibus praesentium sint sunt?',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur dolores eos eum ex labore magni necessitatibus praesentium sint sunt?',
    isOpen: true,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
