import { memo, useCallback } from 'react';

import CopyIcon from '../../assets/icons/article-copy-icon.svg';
import { Button } from '../Button/Button';

import classes from './Code.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CodeProps {
    className?: string;
    code: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, code } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);
    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={classes.copyButton}
                theme="clear"
            >
                <CopyIcon className={classes.copyIcon} />
            </Button>
            <code>{code}</code>
        </pre>
    );
});
