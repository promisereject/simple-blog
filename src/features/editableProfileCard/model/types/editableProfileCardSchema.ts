import { ValidateProfileError } from '../consts/consts';

import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
    data?: Profile;
    // изменённые пользователем данные
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
