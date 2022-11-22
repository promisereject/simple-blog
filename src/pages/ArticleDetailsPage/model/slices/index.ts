import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import {
    articleDetailsRecommendationsReducers,
} from './articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducers } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducers = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducers,
    comments: articleDetailsCommentsReducers,
});
