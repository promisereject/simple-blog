import React from 'react';

export const validateNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => !/^\d+$/.test(e.key) && e.preventDefault();
