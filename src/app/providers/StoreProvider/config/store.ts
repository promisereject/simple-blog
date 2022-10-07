import { configureStore } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducers,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
// 1. Создаём store
// 2. Возвращаем стандартный метод создания @reduxjs/toolkit store из функции, чтобы в будущем её можно было переиспользовать и настраивать для разных тестовых сред
// 3. Типизируем стейт в StateSchema.ts
// 4. Для тестовых сред необходимо инициализировать store. Например, чтобы подготовить данные для теста. Эти данные мы можем принять аргументом в качестве InitialState.
// 5. Передаём InitialState в StoreProvider
// 6. Не забыть обернуть приложение в <StoreProvider> в index.tsx
