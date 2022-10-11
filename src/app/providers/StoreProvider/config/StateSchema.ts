import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

// Типизация must have, т.к. в больших приложениях без типизации работать с кодом практически невозможно
