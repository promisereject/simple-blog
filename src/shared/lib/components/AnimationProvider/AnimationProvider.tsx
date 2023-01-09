import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

// получаем типы из библиотек
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Обе библиотеки зависят друг от друга, поэтому необходимо дождаться полной загрузки обеих
// import() - асинхронный импорт, который можно использовать в любом месте приложения
const getAsyncAnimationModules = async () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

// возвращаем результат работы контекста в хуке
// приводим к типу Required, чтобы TS воспринимал все возвращаемые поля обязательными
// нужно, чтобы каждый раз не писать type guard
export const useAnimationLibs = () =>
    useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    // храним библиотеки в рефах
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            // сохраняем возвращенные промисом библиотеки в подготовленные рефы
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    //  мемоизируем значение для провайдера, чтобы при работе с библиотеками всегда был один и тот же объект
    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
