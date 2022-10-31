import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors, ValidateProfileError } from 'entities/Profile';

describe('getProfileValidateErrors', () => {
    test('should return errors array', () => {
        const validateError = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.NO_DATA,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError,
            },

        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
