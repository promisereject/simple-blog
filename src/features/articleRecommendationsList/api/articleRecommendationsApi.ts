import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
export const useArticleRecommendationsList = articleRecommendationsApi.useGetArticleRecommendationsQuery;
