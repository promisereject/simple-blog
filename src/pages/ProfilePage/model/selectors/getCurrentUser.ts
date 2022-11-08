import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

const userAuthData = (state: StateSchema) => state.user.authData;
const profileData = (state: StateSchema) => state.profile?.data;

export const getCurrentUser = createSelector(
    userAuthData,
    profileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
