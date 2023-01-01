import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from '@/shared/ui/Select';

const options = [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт' },
];

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    label: 'Значение',
    options,
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Значение',
    options,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    label: 'Значение',
    options,
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
