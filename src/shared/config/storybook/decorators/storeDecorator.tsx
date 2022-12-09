import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducers } from '@/features/authByUserName/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducers } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducers } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducers } from '@/pages/ArticleDetailsPage/model/slices';
import { articlesPageReducers } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { profileReducers } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducers,
    profile: profileReducers,
    articleDetails: articleDetailsReducers,
    addCommentForm: addCommentFormReducers,
    articleDetailsPage: articleDetailsPageReducers,
    articlesPage: articlesPageReducers,
};

export const storeDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
