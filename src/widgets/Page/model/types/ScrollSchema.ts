// <Адрес страницы, позиция скролла>
export type PageScrollSchema = Record<string, number>;

export interface ScrollSchema {
    scroll: PageScrollSchema;
}
