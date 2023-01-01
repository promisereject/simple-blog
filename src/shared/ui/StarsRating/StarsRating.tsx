import { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star-icon.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './StarsRating.module.scss';
import { Icon } from '../Icon';

interface StarsRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarsRating = memo((props: StarsRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isStarsSelected, setIsStarsSelected] = useState(Boolean(selectedStars));

    const mods:Mods = {
        [classes.selected]: isStarsSelected,
    };

    const onStarHover = (starsCount:number) => () => {
        if (!isStarsSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onStarLeave = () => {
        if (!isStarsSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onStarClick = (starsCount:number) => () => {
        if (!isStarsSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsStarsSelected(true);
        }
    };

    return (
        <div className={classNames(classes.StarsRating, {}, [className])}>
            {stars.map((star) => (
                <Icon
                    className={classNames(
                        classes.starIcon,
                        mods,
                        [currentStarsCount >= star ? classes.hovered : classes.normal],
                    )}
                    width={size}
                    height={size}
                    Svg={StarIcon}
                    key={star}
                    onMouseLeave={onStarLeave}
                    onMouseEnter={onStarHover(star)}
                    onClick={onStarClick(star)}
                />
            ))}
        </div>
    );
});
