type Mods = Record<string, boolean | string>;

const obj: Mods = {}

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            // исключаем из массива все false
            .map(([className]) => className)
            // возвращаем оставшиеся классы
    ]
        .join(' ')
}