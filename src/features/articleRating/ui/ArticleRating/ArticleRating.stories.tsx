import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ArticleRating from './ArticleRating';

import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

export default {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [storeDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const NormalWithoutRate = Template.bind({});
NormalWithoutRate.args = {
    articleId: '1',
};
NormalWithoutRate.decorators = [storeDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
})];
NormalWithoutRate.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
