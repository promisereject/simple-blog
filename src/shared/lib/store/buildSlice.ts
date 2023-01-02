import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

// стандартный дженерик функции createSlice
export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    // создаём слайс
    const slice = createSlice(options);

    // хук, оборачивающий все экшены в диспатч
    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();
        // пример из доки реакта
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        // возвращаем все данные из слайса
        ...slice,
        useActions,
    };
}

// Для чего это нужно
// Для каждого слайса будет генерироваться хук, который сразу биндит диспатч к экшенам
// Этот хук мы можем назвать как угодно и использовать внутри компонентов без dispatch
