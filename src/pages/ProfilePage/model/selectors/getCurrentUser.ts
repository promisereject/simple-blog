import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'entities/Profile';

export const getCurrentUser = createSelector(
    getUserAuthData,
    getProfileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
