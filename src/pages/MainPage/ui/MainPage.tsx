import { memo } from 'react';
import { useTranslation } from 'react-i18next';

// компонент для тестирования ErrorBoundary
// eslint-disable-next-line fsd-stable/fsd-layer-imports
import { ErrorButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page
            data-testid="MainPage"
            className={classNames('', {}, [])}
        >
            <VStack max gap="32">
                <Text text={t('Главная страница')} />
                <Counter />
                <ErrorButton />
            </VStack>
        </Page>
    );
});

export default MainPage;
