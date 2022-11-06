import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import classes from './CommentsList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean
}

export const CommentsList = memo((props: CommentsListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(classes.CommentsList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard className={classes.comment} comment={comment} isLoading={isLoading} />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
