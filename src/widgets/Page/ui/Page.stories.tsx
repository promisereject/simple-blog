import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Page } from './Page';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'widgets/Page',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Wrapper = Template.bind({});
Wrapper.args = {
    children: <div style={{ background: 'grey', width: '100%', minHeight: '100%' }} />,
    removeScrollSaving: true,
};

Wrapper.decorators = [storeDecorator({})];
