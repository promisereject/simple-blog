import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames/classNames";
import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(classes.languageSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
};