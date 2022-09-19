import {classNames} from "shared/lib/classNames/classNames";
import classes from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeSwitcherIcon className={classNames('', {}, [classes[theme]])} />
            {/* @svgr/webpack loader преобразовывает иконку в компонент */}
            {/* корректная типизация svg модуля позволяет получить правильные пропсы в подсказках для компонента */}
        </Button>
    );
};