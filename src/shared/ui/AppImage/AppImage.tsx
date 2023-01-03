import {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = '',
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // в отличии от useEffect вызывается до того, как компонент вмонтируется
    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';

        image.onload = () => {
            setIsLoading(false);
        };

        image.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...otherProps}
        />
    );
});
