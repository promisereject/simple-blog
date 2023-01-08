import { memo, useCallback } from 'react';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducers } from '../../model/slices/articlesPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducers,
};

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const onLoadNextArticlesPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <Page
                data-testid="ArticlesPage"
                onScrollEnd={onLoadNextArticlesPart}
                className={classNames('', {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticlesInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
