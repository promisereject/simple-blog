import { memo } from 'react';

import { ArticleView } from '../../model/consts/consts';

import classes from './ArticleListItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const articleViews = (
            <div className={classes.views}>
                <Skeleton width={50} height={16} />
                <Skeleton width={16} height={16} borderRadius="50%" />
            </div>
        );

        if (view === ArticleView.BLOCK) {
            return (
                <div
                    className={classNames(classes.ArticleListItem, {}, [
                        className,
                        classes[view],
                    ])}
                >
                    <Card>
                        <div className={classes.header}>
                            <Skeleton
                                width={30}
                                height={30}
                                borderRadius="50%"
                                className={classes.avatar}
                            />
                            <Skeleton
                                width={100}
                                height={16}
                                className={classes.username}
                            />
                            <Skeleton
                                width={100}
                                height={16}
                                className={classes.date}
                            />
                        </div>
                        <Skeleton
                            width="40%"
                            height={24}
                            className={classes.title}
                        />
                        <Skeleton
                            width="30%"
                            height={16}
                            className={classes.types}
                        />
                        <Skeleton height={250} className={classes.blockImage} />
                        <Skeleton
                            width="50%"
                            height={32}
                            className={classes.title}
                        />
                        <Skeleton
                            width="100%"
                            height={200}
                            className={classes.textBlock}
                        />

                        <div className={classes.footer}>
                            <Skeleton width={150} height={40} />
                            {articleViews}
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <div
                className={classNames(classes.ArticleListItem, {}, [
                    className,
                    classes[view],
                ])}
            >
                <Card>
                    <div className={classes.imageWrapper}>
                        <Skeleton width="100%" className={classes.image} />
                    </div>
                    <div className={classes.infoWrapper}>
                        <Skeleton width={150} height={16} />
                        {articleViews}
                    </div>
                    <Skeleton
                        width={180}
                        height={16}
                        className={classes.title}
                    />
                </Card>
            </div>
        );
    },
);
