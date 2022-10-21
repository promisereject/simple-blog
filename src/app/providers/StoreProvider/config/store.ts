import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { userReducers } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducers,
        user: userReducers,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
// 1. Создаём store
// 2. Возвращаем стандартный метод создания @reduxjs/toolkit store из функции, чтобы в будущем её можно было переиспользовать и настраивать для разных тестовых сред
// 3. Типизируем стейт в StateSchema.ts
// 4. Для тестовых сред необходимо инициализировать store. Например, чтобы подготовить данные для теста. Эти данные мы можем принять аргументом в качестве InitialState.
// 5. Передаём InitialState в StoreProvider
// 6. Не забыть обернуть приложение в <StoreProvider> в index.tsx

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
