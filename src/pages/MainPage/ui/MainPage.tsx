import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ErrorButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page className={classNames('', {}, [])}>
            <VStack max gap="32">
                <Text text={t('Главная страница')} />
                <ErrorButton />
            </VStack>
        </Page>
    );
});

export default MainPage;
