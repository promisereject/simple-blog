import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError', () => {
    test('should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error message',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error message');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
