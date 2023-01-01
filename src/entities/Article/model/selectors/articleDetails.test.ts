/**
 * Created by Sergei Mitrofanov from rjadysh.com on вс, 04-11-22, 13:14
 */

import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError', () => {
    test('should return article data', () => {
        const data = {
            id: '1',
            subtitle: 'Подзаголовок',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
