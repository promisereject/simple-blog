import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/addCommentForm/ui/addCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
