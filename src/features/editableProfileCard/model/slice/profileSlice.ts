import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    readonly: true,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateError = undefined;
            state.form = state.data;
            // отменяем изменения пользователя в форме и возвращаем данные с сервера
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducers } = profileSlice;
