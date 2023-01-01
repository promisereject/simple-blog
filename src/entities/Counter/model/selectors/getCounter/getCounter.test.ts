/**
 * Created by Sergei Mitrofanov from rjadysh.com on  пт, 7-10-2022, в 12:45
 */

import { getCounter } from './getCounter';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});

// Приведение as можно использовать в тестах, но в целом, использование в коде нежелательно
