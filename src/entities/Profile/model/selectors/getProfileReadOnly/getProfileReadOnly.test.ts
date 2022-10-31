import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from 'entities/Profile';

describe('getProfileReadOnly', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },

        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
