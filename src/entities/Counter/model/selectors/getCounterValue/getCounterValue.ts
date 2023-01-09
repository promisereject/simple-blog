import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);

// В тулките под капотом есть библиотека reselect, которая позволяет комбинировать селекторы, мемоизируя их значения.
