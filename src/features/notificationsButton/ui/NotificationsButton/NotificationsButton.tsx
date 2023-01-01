import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import classes from './NotificationsButton.module.scss';

import { NotificationsList } from '@/entities/Notification';
import NotificationsIcon from '@/shared/assets/icons/navbar-notifications-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const {
        className,
    } = props;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onDrawerOpen = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onDrawerClose = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const trigger = (
        <Button theme="clear" onClick={onDrawerOpen}>
            <Icon Svg={NotificationsIcon} className={classes.notificationsIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(classes.NotificationsButton, {}, [className])}
                    direction="bottom right"
                    trigger={trigger}
                >
                    <NotificationsList className={classes.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
});
