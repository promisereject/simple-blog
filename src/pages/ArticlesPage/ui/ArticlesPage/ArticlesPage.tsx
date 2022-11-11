import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(classes.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BLOCK}
                articles={[]}
            />
        </div>
    );
});

export default ArticlesPage;
