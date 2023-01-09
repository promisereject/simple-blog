describe('Пользователь заходит на страницу со списком статей', () => {
    describe('Работа с API', () => {
        beforeEach(() => {
            cy.login();
            cy.visit('articles');
        });

        it('=> и статьи успешно подгружаются', () => {
            cy.getByTestId('ArticlesList').should('exist');
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                3,
            );
        });

        it.skip('=> заскипанный тест с намеренной ошибкой', () => {
            cy.getByTestId('wtf').should('exist');
        });
    });

    describe('Работа на стабах (фикстурах)', () => {
        it('=> и статьи успешно подгружаются из стабов (фикстур)', () => {
            cy.intercept('GET', '**/articles?*', {
                fixture: 'articles-list.json',
            });
            cy.getByTestId('ArticlesList').should('exist');
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                11,
            );
        });
    });
});
