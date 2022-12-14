import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileUser = createSelector(
    getUserAuthData,
    getProfileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
