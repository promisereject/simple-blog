import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <ErrorButton />
        </Page>
    );
});

export default MainPage;
