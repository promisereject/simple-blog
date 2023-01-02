/**
 * Created by Sergei Mitrofanov from rjadysh.com on 06.10.2022
 */

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import classes from './Counter.module.scss';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    const { decrement, increment, addValue } = useCounterActions();

    // стандартный вариант использования с useSelector
    // const counterValue = useSelector(getCounterValue);

    // упрощение с использованием хелпера buildSelector
    const counterValue = useCounterValue();

    // стандартный вариант с диспатчем
    // const increment = () => {
    //     dispatch(counterActions.increment());
    // };

    // упрощение с использованием хелпера buildSlice
    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const addValueHandler = () => {
        addValue(10);
    };

    return (
        <div data-testid="counter-container" className={classes.Counter}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={incrementHandler}>+</Button>
            <Button data-testid="decrement-button" onClick={decrementHandler}>-</Button>
            <Button data-testid="add-value-button" onClick={addValueHandler}>10</Button>
        </div>
    );
};

// Первая энтитя
// Стандартная иерархия public API, но добавляется model, в которой хранится всё, что относится к взаимодействию со стейтом
