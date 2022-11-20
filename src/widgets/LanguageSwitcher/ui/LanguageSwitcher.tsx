import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
    const {
        className,
        short,
    } = props;
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            <Text theme={TextTheme.INVERTED} text={t(short ? 'Короткий язык' : 'Язык')} />
        </Button>
    );
});
