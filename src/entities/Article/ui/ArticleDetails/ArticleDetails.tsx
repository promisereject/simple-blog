import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSizes, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import ViewsIcon from 'shared/assets/icons/article-views-icon.svg';
import DateIcon from 'shared/assets/icons/article-date-icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducers } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        id,
    } = props;

    const reducers: ReducersList = {
        articleDetails: articleDetailsReducers,
    };

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} />;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} />;
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={classes.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <div className={classes.errorWrapper}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={classes.avatar}
                    />
                </HStack>
                <Text
                    className={classes.title}
                    title={article?.title}
                    titleTag="h1"
                    text={article?.subtitle}
                    size={TextSizes.L}
                />
                <HStack gap="4">
                    <Icon Svg={ViewsIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap="4">
                    <Icon Svg={DateIcon} />
                    <Text text={article?.createdAt} />
                </HStack>
                <VStack gap="32">
                    {article?.blocks.map(renderBlock)}
                </VStack>
            </>
        );
    }
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <article>
                <VStack gap="8" className={classNames(classes.ArticleDetails, {}, [className])}>
                    {content}
                </VStack>
            </article>
        </DynamicModuleLoader>
    );
});
