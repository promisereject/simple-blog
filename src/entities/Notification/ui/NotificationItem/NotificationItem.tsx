import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/notification';
import classes from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className,
        item,
    } = props;

    const content = (
        <Card theme="outlined" className={classNames(classes.NotificationItem, {}, [className])}>
            <Text gap="8" title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink to={item.href} className={classes.withLink}>

                <Card theme="outlined" className={classNames(classes.NotificationItem, {}, [className])}>
                    <Text gap="8" title={item.title} text={item.description} />
                </Card>
            </AppLink>
        );
    }

    return content;
});
