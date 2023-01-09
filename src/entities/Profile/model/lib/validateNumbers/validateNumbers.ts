import { KeyboardEvent } from 'react';

export const validateNumbers = (e: KeyboardEvent<HTMLInputElement>) =>
    !/^\d+$/.test(e.key) && e.preventDefault();
