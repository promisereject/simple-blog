import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducers } from '../../model/slices/articlesPageSlice';

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
