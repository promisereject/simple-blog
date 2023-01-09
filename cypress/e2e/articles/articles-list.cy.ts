describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('articles');
    });

    it('=> и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticlesList').should('exist');
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
    });
});
