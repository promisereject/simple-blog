import { addDecorator } from '@storybook/react';

import { Theme } from '../../src';
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator';
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { suspenseDecorator } from '../../src/shared/config/storybook/decorators/suspenseDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/decorators/themeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.NORMAL, color: '#e8e8ea' },
            { name: 'dark', class: Theme.DARK, color: '#090949' },
            { name: 'orange', class: Theme.ORANGE, color: '#bd5012' },
        ],
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.NORMAL));
addDecorator(routerDecorator);
addDecorator(suspenseDecorator);
