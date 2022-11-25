import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => (
            <div style={{
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
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    value: 'top left',
    direction: 'top left',
    items: [
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
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    value: 'top right',
    direction: 'top right',
    items: [
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
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    value: 'bottom left',
    direction: 'bottom left',
    items: [
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
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    value: 'bottom right',
    direction: 'bottom right',
    items: [
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
    ],
};
