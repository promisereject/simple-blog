/**
 * Created by Sergei Mitrofanov from rjadysh.com on 06.10.2022
 */

import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const
        {
            children,
            initialState,
            asyncReducers,
        } = props;

    // const navigate = useNavigate(); - создавал новый стор при смене страницы, пока выпилен

    const store = useMemo(() => createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate
    ), [
        asyncReducers,
        initialState,
        // navigate
    ]);

    return (
        <Provider store={store}>
            {children}
        </Provider>

    );
};
