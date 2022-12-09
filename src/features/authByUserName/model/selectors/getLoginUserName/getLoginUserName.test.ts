/**
 * Created by Sergei Mitrofanov from rjadysh.com on вт, 18-10-22, 18:06
 */

import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'boomboom',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('boomboom');
    });

    test('should return empty string with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
