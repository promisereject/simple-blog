/**
 * Created by Sergei Mitrofanov from rjadysh.com on вт, 18-10-22, 18:00
 */

import { getLoginIsLoading } from './getLoginIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
