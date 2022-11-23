import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { HStack, VStack } from 'shared/ui/Stack';
import classes from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
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
            <VStack gap="16" max className={classNames(classes.CommentCard, {}, [className, classes.loading])}>
                <HStack gap="16">
                    <Skeleton width={50} height={50} borderRadius="50%" />
                    <Skeleton width={150} height={30} />
                </HStack>
                <Skeleton width="100%" height={100} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="16" max className={classNames(classes.CommentCard, {}, [className])}>
            <AppLink to={`${routePath.profile}${comment.user.id}`}>
                <HStack gap="16">
                    {comment.user.avatar ? <Avatar size={50} src={comment.user.avatar} /> : null}
                    <Text title={comment.user.username} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
