import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSchema } from '../types/ScrollSchema';

const initialState: ScrollSchema = {
    scroll: {},
};

export const saveScrollPositionSlice = createSlice({
    name: 'saveScrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, action:PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: saveScrollPositionActions } = saveScrollPositionSlice;
export const { reducer: saveScrollPositionReducers } = saveScrollPositionSlice;
