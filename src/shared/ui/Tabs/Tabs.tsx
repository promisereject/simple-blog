import { memo, ReactNode, useCallback } from 'react';

import { Card } from '../Card/Card';

import classes from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const onTabClickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(classes.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? 'normal' : 'outlined'}
                    key={tab.value}
                    onClick={onTabClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
