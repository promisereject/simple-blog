import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducers } from '@/features/authByUserName/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducers } from '@/entities/Article/testing';
import { addCommentFormReducers } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducers } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducers } from '@/pages/ArticlesPage/testing';
import { profileReducers } from '@/features/editableProfileCard/testing';

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
