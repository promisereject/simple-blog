/**
 * Created by Sergei Mitrofanov from rjadysh.com on пт, 7-10-22, 13:9
 */

import { CounterSchema } from '../types/counterSchema';

import { counterReducers, counterActions } from './counterSlice';

describe('getCounterValue', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducers(state, counterActions.decrement)).toEqual({
            value: 9,
        });
    });

    test('decrement should work with empty state', () => {
        expect(counterReducers(undefined, counterActions.decrement)).toEqual({
            value: -1,
        });
    });

    test('increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducers(state, counterActions.increment)).toEqual({
            value: 11,
        });
    });

    test('increment should work with empty state', () => {
        expect(counterReducers(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});

// хорошей практикой считаются дополнительные тесты, проверяющие undefined state
