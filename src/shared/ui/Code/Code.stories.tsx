import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Code } from './Code';

const code = '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\\"hello\\"></p>\n\n    <script>\n      document.getElementById(\\"hello\\").innerHTML = \\"Hello, world!\\";\n    </script>\n  </body>\n</html>;';
export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    code,
};

export const Dark = Template.bind({});
Dark.args = {
    code,
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    code,
};
Orange.decorators = [themeDecorator(Theme.ORANGE)];
