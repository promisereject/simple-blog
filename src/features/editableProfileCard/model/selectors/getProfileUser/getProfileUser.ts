import { createSelector } from '@reduxjs/toolkit';

import { getProfileData } from '../getProfileData/getProfileData';

import { getUserAuthData } from '@/entities/User';

export const getProfileUser = createSelector(
    getUserAuthData,
    getProfileData,
    (authUserId, profileId) => authUserId?.id === profileId?.id,
);
