import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <ErrorButton />
        </div>
    );
});

export default MainPage;
