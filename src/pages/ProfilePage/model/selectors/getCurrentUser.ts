import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';

export const getCurrentUser = createSelector(
    getUserAuthData,
    getProfileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
