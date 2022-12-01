import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortField } from '../../model/consts/consts';
import classes from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('по возрастанию'),
        },
        {
            value: 'desc',
            content: t('по убыванию'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('по дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('по названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('по количеству просмотров'),
        },
    ], [t]);

    return (
        <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('Порядок')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
