import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { Text } from 'shared/ui/Text/Text';
import classes from './MainPage.module.scss';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Text text={t('Главная страница')} className={classes.text} />
            <ErrorButton />
        </Page>
    );
});

export default MainPage;
