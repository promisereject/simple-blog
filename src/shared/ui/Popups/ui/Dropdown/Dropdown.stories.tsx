import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@/shared/ui/Button/Button';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Dropdown } from './Dropdown';

const items = [
    {
        content: 'Ссылка 1',
    },
    {
        content: 'Длинная ссылка 2',
    },
];

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Dropdown</Button>,
    direction: 'bottom left',
    items,
};

export const BottomLeftDark = Template.bind({});
BottomLeftDark.args = {
    trigger: <Button>Dropdown</Button>,
    direction: 'bottom left',
    items,
};

BottomLeftDark.decorators = [themeDecorator(Theme.DARK)];

export const BottomLeftOrange = Template.bind({});
BottomLeftOrange.args = {
    trigger: <Button>Dropdown</Button>,
    direction: 'bottom left',
    items,
};

BottomLeftOrange.decorators = [themeDecorator(Theme.ORANGE)];
