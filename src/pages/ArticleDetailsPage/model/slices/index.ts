import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import { articleDetailsCommentsReducers } from './articleDetailsCommentsSlice';
import {
    articleDetailsRecommendationsReducers,
} from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducers = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducers,
    comments: articleDetailsCommentsReducers,
});
