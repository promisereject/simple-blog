import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotificationsApi } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const {
        className,
    } = props;

    const { data, isLoading } = useNotificationsApi(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                <Skeleton width="100%" borderRadius="12px" height="100px" />
                <Skeleton width="100%" borderRadius="12px" height="100px" />
                <Skeleton width="100%" borderRadius="12px" height="100px" />
            </VStack>
        );
    }
    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
