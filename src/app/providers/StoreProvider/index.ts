export type {
    StateSchema, ReduxStoreWithReducerManager, ThunkConfig, StateSchemaKey,
} from './config/StateSchema';
export type { AppDispatch } from './config/store';
export { StoreProvider } from './ui/StoreProvider';
export { createReduxStore } from './config/store';
export { createReducerManager } from './config/reducerManager';

// FSD запрещает использовать импорты из вышестоящего слоя. Ввиду незадокуметированности для типов есть исключение (но так всё равно лучше не делать)
