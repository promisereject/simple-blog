/**
 * Created by Sergei Mitrofanov from rjadysh.com on ср, 19-10-22, 14:20
 */

import { DeepPartial } from '@reduxjs/toolkit';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileSchema, ValidateProfileError } from '@/features/editableProfileCard';
import { profileActions, profileReducers } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    id: '1',
    name: 'Сергей',
    surname: 'Митрофанов',
    age: 33,
    city: 'Тверь',
    username: 'sergey',
    currency: Currency.RUB,
    country: Country.Russia,
};

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducers(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducers(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });
    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { name: 'Сергей' } };
        expect(profileReducers(
            state as ProfileSchema,
            profileActions.updateProfile({
                name: 'Не Сергей',
            }),
        )).toEqual({
            form: { name: 'Не Сергей' },
        });
    });
    test('update profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [
                ValidateProfileError.SERVER_ERROR,
            ],
        };
        expect(profileReducers(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('update profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducers(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
