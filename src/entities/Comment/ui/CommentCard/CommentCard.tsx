import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(classes.CommentCard, {}, [className])}>
                <div className={classes.header}>
                    <Skeleton width={50} height={50} borderRadius="50%" />
                    <Skeleton width={150} height={30} />
                </div>
                <Skeleton width="100%" height={100} />
            </div>
        );
    }
    return (
        <div className={classNames(classes.CommentCard, {}, [className])}>
            <div className={classes.header}>
                {comment.user.avatar ? <Avatar size={50} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
