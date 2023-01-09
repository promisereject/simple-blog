import { memo } from 'react';

import classes from './ArticleViewSwitcher.module.scss';

import { ArticleView } from '@/entities/Article';
import ViewBlockIcon from '@/shared/assets/icons/articles-view-block-icon.svg';
import ViewTileIcon from '@/shared/assets/icons/articles-view-tile-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: ViewTileIcon,
    },
    {
        view: ArticleView.BLOCK,
        icon: ViewBlockIcon,
    },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div
            className={classNames(classes.ArticleViewSwitcher, {}, [className])}
        >
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme="clear"
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            '',
                            { [classes.active]: viewType.view !== view },
                            [],
                        )}
                    />
                </Button>
            ))}
        </div>
    );
});
