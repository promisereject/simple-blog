import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Редирект с несуществующего роута на страницу 404', () => {
            cy.visit('/wtf-page');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/3');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Переход на страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
