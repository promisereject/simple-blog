import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@/shared/lib/store';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addValue: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducers,
    // хук из хелпера
    useActions: useCounterActions,
} = counterSlice;
