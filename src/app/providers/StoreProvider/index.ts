export { StoreProvider } from './ui/StoreProvider';
export { createReduxStore, AppDispatch } from './config/store';
export { StateSchema, ReduxStoreWithReducerManager, ThunkConfig } from './config/StateSchema';

// FSD запрещает использовать импорты из вышестоящего слоя. Ввиду незадокуметированности для типов есть исключение (но так всё равно лучше не делать)
