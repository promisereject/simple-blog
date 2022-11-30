/**
 * Created by Sergei Mitrofanov from rjadysh.com on вт, 18-10-22, 17:53
 */

import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error message',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error message');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
