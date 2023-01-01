import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducers } from '../../model/slices/addCommentFormSlice';

import classes from './AddCommentForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducers,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentFormChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentFormChange('');
    }, [onCommentFormChange, onSendComment, text]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <HStack max justify="between" className={classNames(classes.AddCommentForm, {}, [className])}>
                <Input
                    className={classes.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentFormChange}
                />
                <Button
                    onClick={onSendCommentHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
