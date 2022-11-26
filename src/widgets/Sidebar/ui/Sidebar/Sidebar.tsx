import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const sidebarItemsList = useSelector(getSidebarItems);

    const sidebarItems = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <section
            data-testid="sidebar"
            className={
                classNames(
                    classes.sidebar,
                    { [classes.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <VStack
                role="navigation"
                gap="8"
                className={classes.items}
            >
                {sidebarItems}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classes.collapseButton}
                theme="backgroundInverted"
                square
                size="size_xl"
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </section>
    );
});
