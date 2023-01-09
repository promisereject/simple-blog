let currentArticleId: string;
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('=> и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Data').should('exist');
    });

    it('=> и видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('=> и оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Data');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Комментарий из Cypress');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
        cy.getByTestId('CommentCard.Content').should(
            'include.text',
            'Комментарий из Cypress',
        );
    });

    it('=> и оценивает статью', () => {
        cy.getByTestId('ArticleDetails.Data');
        cy.getByTestId('Rating').scrollIntoView();
        cy.setRate(2, 'Отзыв о статье из Cypress');
        cy.get('[data-selected=true]').should('have.length', 2);
    });

    it('=> и оценивает статью из стабов (фикстур)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Data');
        cy.getByTestId('Rating').scrollIntoView();
        cy.setRate(3, 'Отзыв о статье из Cypress');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
