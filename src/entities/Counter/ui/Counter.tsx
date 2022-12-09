/**
 * Created by Sergei Mitrofanov from rjadysh.com on 06.10.2022
 */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import classes from './Counter.module.scss';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter-container" className={classes.Counter}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={increment}>+</Button>
            <Button data-testid="decrement-button" onClick={decrement}>-</Button>
        </div>
    );
};

// Первая энтитя
// Стандартная иерархия public API, но добавляется model, в которой хранится всё, что относится к взаимодействию со стейтом
