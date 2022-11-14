import {
    CombinedState, configureStore, ReducersMapObject, Reducer,
} from '@reduxjs/toolkit';
import { counterReducers } from 'entities/Counter';
import { userReducers } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducers,
        user: userReducers,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgument: ThunkExtraArg = {
        api: $api,
        // navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
// 1. Создаём store
// 2. Возвращаем стандартный метод создания @reduxjs/toolkit store из функции, чтобы в будущем её можно было переиспользовать и настраивать для разных тестовых сред
// 3. Типизируем стейт в StateSchema.ts
// 4. Для тестовых сред необходимо инициализировать store. Например, чтобы подготовить данные для теста. Эти данные мы можем принять аргументом в качестве InitialState.

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
