import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK:
        newTheme = Theme.NORMAL;
        break;
    case Theme.NORMAL:
        newTheme = Theme.ORANGE;
        break;
    case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
    default:
        newTheme = Theme.NORMAL;
        break;
    }
    const toggleTheme = () => {
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.NORMAL,
        toggleTheme,
    };
}
