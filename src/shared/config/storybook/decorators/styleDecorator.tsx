// хелпер для тестов, не бизнес-код, можно заигнорить
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const styleDecorator = (StoryComponent: Story) => <StoryComponent />;
