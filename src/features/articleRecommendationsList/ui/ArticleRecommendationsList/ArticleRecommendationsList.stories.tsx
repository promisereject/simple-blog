import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { Article, ArticleType } from '@/entities/Article';
import { storeDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

const article: Article = {
    id: '1',
    img: 'https://pythonist.ru/wp-content/uploads/2020/04/d4a71cd880a24c99bf84fbc5f19da445.png',
    title: 'Python news',
    subtitle: 'Невероятно, но факт!',
    createdAt: '22.02.2022',
    user: { id: '1', username: 'sergey' },
    type: [ArticleType.IT],
    views: 9999,
    blocks: [],
};

export default {
    title: 'features/Article/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/articles?_limit=10`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
                { ...article, id: '4' },
                { ...article, id: '5' },
                { ...article, id: '6' },
                { ...article, id: '7' },
                { ...article, id: '8' },
                { ...article, id: '9' },
                { ...article, id: '10' },
            ],
        },
    ],
};
