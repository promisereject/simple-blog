import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/article-copy-icon.svg';
import classes from './Code.module.scss';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        code,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);
    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <Button onClick={onCopy} className={classes.copyButton} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={classes.copyIcon} />
            </Button>
            <code>
                {code}
            </code>
        </pre>
    );
});
