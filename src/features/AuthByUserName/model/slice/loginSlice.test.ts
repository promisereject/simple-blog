/**
 * Created by Sergei Mitrofanov from rjadysh.com on ср, 19-10-22, 14:20
 */

import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducers } from './loginSlice';

describe('loginSlice', () => {
    test('set username test', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        expect(loginReducers(
            state as LoginSchema,
            loginActions.setUserName('boom'),
        )).toEqual({ username: 'boom' });
    });
    test('set password test', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        expect(loginReducers(
            state as LoginSchema,
            loginActions.setUserPassword('12345'),
        )).toEqual({ password: '12345' });
    });
});
