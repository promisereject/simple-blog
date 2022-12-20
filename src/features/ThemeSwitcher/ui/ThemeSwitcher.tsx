import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-switcher.svg';
import { Button } from '@/shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme="clear"
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon
                className={classNames('', {}, [classes[theme]])}
            />
            {/* @svgr/webpack loader преобразовывает иконку в компонент */}
            {/* корректная типизация svg модуля позволяет получить правильные пропсы
             в подсказках для компонента */}
        </Button>
    );
});
