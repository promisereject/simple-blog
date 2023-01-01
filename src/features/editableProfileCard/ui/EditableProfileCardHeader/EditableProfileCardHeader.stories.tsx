import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
