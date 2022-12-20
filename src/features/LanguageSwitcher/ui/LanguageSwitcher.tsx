import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

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
            theme="clear"
            onClick={toggle}
        >
            <Text theme="inverted" text={t(short ? 'Короткий язык' : 'Язык')} />
        </Button>
    );
});
