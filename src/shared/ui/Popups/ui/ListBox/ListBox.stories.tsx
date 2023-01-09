import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/shared/const/theme';

const items = [
    {
        content: 'Ссылка 1',
        value: '1',
    },
    {
        content: 'Ссылка 2',
        value: '2',
    },
    {
        content: 'Длинная ссылка 3',
        value: '3',
    },
];

const storyAlign = (Story: any) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Story />
    </div>
);

export default {
    title: 'shared/ListBox',
    component: ListBox,
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'top left',
    direction: 'top left',
    items,
};
TopLeft.decorators = [storyAlign];

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'top right',
    direction: 'top right',
    items,
};
TopRight.decorators = [storyAlign];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'bottom left',
    direction: 'bottom left',
    items,
};
BottomLeft.decorators = [storyAlign];

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'bottom right',
    direction: 'bottom right',
    items,
};
BottomRight.decorators = [storyAlign];

export const TopLeftDark = Template.bind({});
TopLeftDark.args = {
    value: 'top left',
    direction: 'top left',
    items,
};
TopLeftDark.decorators = [storyAlign, themeDecorator(Theme.DARK)];

export const TopRightDark = Template.bind({});
TopRightDark.args = {
    value: 'top right',
    direction: 'top right',
    items,
};
TopRightDark.decorators = [storyAlign, themeDecorator(Theme.DARK)];

export const BottomLeftDark = Template.bind({});
BottomLeftDark.args = {
    value: 'bottom left',
    direction: 'bottom left',
    items,
};
BottomLeftDark.decorators = [storyAlign, themeDecorator(Theme.DARK)];

export const BottomRightDark = Template.bind({});
BottomRightDark.args = {
    value: 'bottom right',
    direction: 'bottom right',
    items,
};
BottomRightDark.decorators = [storyAlign, themeDecorator(Theme.DARK)];

export const TopLeftOrange = Template.bind({});
TopLeftOrange.args = {
    value: 'top left',
    direction: 'top left',
    items,
};
TopLeftOrange.decorators = [storyAlign, themeDecorator(Theme.ORANGE)];

export const TopRightOrange = Template.bind({});
TopRightOrange.args = {
    value: 'top right',
    direction: 'top right',
    items,
};
TopRightOrange.decorators = [storyAlign, themeDecorator(Theme.ORANGE)];

export const BottomLeftOrange = Template.bind({});
BottomLeftOrange.args = {
    value: 'bottom left',
    direction: 'bottom left',
    items,
};
BottomLeftOrange.decorators = [storyAlign, themeDecorator(Theme.ORANGE)];

export const BottomRightOrange = Template.bind({});
BottomRightOrange.args = {
    value: 'bottom right',
    direction: 'bottom right',
    items,
};
BottomRightOrange.decorators = [storyAlign, themeDecorator(Theme.ORANGE)];
