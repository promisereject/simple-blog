import { validateProfileData } from './validateProfileData';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { ValidateProfileError } from '@/features/editableProfileCard';

const data = {
    name: 'Сергей',
    surname: 'Митрофанов',
    age: 33,
    city: 'Тверь',
    username: 'sergey',
    currency: Currency.RUB,
    country: Country.Russia,
};

describe('validateProfileData', () => {
    test('correct user data', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without name and surname', async () => {
        const result = validateProfileData({ ...data, name: '', surname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
