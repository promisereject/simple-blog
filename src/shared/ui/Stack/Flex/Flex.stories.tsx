import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowJustifyCenter = Template.bind({});
RowJustifyCenter.args = {
    justify: 'center',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowJustifyBetween = Template.bind({});
RowJustifyBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const RowJustifyAround = Template.bind({});
RowJustifyAround.args = {
    justify: 'around',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
};

export const ColumnAlignStart = Template.bind({});
ColumnAlignStart.args = {
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
    align: 'start',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
    align: 'end',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    gap: '4',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    gap: '32',
    children: (
        <>
            <div>Text</div>
            <div>Text</div>
            <div>Text</div>
        </>
    ),
    direction: 'column',
};
