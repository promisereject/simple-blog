import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
    counter: CounterSchema;
}

// Типизация must have, т.к. в больших приложениях без типизации работать с кодом практически невозможно
