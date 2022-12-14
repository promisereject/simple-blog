import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/editableProfileCard';

export const getCurrentUser = createSelector(
    getUserAuthData,
    getProfileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
