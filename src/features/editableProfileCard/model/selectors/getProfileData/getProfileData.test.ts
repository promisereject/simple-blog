/**
 * Created by Sergei Mitrofanov from rjadysh.com on вс, 30-10-22, 21:37
 */

import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            name: 'Сергей',
            surname: 'Митрофанов',
            age: 33,
            city: 'Тверь',
            username: 'sergey',
            currency: Currency.RUB,
            country: Country.Russia,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
