import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationsIcon from 'shared/assets/icons/navbar-notifications-icon.svg';
import { NotificationsList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import classes from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const {
        className,
    } = props;
    return (
        <Popover
            className={classNames(classes.NotificationsButton, {}, [className])}
            direction="bottom right"
            trigger={(
                <Button theme="clear">
                    <Icon Svg={NotificationsIcon} className={classes.notificationsIcon} inverted />
                </Button>
            )}
        >
            <NotificationsList className={classes.notifications} />
        </Popover>
    );
});
