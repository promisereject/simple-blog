import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const styleDecorator = (StoryComponent: Story) => (
    <Suspense fallback="">
        <StoryComponent />
    </Suspense>
);
