import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Введите логин')} />
            <Input placeholder={t('Введите пароль')} />
            <Button className={classes.loginButton}>{t('Войти')}</Button>
        </div>
    );
};
