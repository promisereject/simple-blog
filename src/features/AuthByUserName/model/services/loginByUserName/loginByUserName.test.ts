/**
 * Created by Sergei Mitrofanov from rjadysh.com on вт, 18-10-22, 18:10
 */

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

describe('loginByUserName', () => {
    test('login success', async () => {
        const userData = { username: 'boomboom', id: '1' };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'boomboom', password: '1234567890' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('login error', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'boomboom', password: '1234567890' });
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });

    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('login error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUserName({ username: 'boomboom', password: '1234567890' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });
});
