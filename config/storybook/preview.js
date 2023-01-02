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
};

addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.NORMAL));
addDecorator(routerDecorator);
addDecorator(suspenseDecorator);
