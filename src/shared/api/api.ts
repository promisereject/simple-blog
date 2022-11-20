import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: __API_URL__,
});

// Отрабатывает перед каждым запросом
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorisation = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }

    return config;
});
