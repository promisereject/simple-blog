import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// TODO: освежить замыкания
export const themeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
