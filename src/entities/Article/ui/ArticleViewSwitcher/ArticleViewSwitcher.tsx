import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ViewTileIcon from '@/shared/assets/icons/articles-view-tile-icon.svg';
import ViewBlockIcon from '@/shared/assets/icons/articles-view-block-icon.svg';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleView } from '../../model/consts/consts';
import classes from './ArticleViewSwitcher.module.scss';

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
    const {
        className,
        view,
        onViewClick,
    } = props;

    // TODO: Посмотреть другие примеры замыканий
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(classes.ArticleViewSwitcher, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme="clear"
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [classes.active]: viewType.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});
