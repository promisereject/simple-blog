import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/decorators/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator';
import { suspenseDecorator } from '../../src/shared/config/storybook/decorators/suspenseDecorator';
import { Theme } from '../../src';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.NORMAL));
addDecorator(routerDecorator);
addDecorator(suspenseDecorator);
