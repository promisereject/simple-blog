/**
 * Created by Sergei Mitrofanov from rjadysh.com on вт, 18-10-22, 18:03
 */

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234567890',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('1234567890');
    });

    test('should return empty string with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
