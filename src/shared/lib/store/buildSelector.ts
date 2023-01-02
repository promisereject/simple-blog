import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';
// возвращаемое дженериком значение будет подхватываться и автоматически типизироваться
type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];
export function buildSelector<T>(selector: Selector<T>): Result<T> {
    // оборачиваем селектор из аргумента в useSelector
    const useSelectorHook = () => useSelector(selector);

    // возвращаем кортеж из хука и селектора
    return [useSelectorHook, selector];
}

// Для чего это нужно
// Мы биндим useSelector внутри нашей функции-хелпера buildSelector и за счёт этого избавляемся от необходимости
// каждый раз использовать useSelector внутри компонентов
// Хук, который возвращается из кортежа используем напрямую где нам нужно, любое количество раз
