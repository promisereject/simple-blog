let profileId: string;

describe('Пользователь заходит на страницу собственного профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('=> и профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Name').should('have.value', 'Test');
    });

    it('=> и редактирует его', () => {
        const newName = 'Name from Cypress';
        const newSurname = 'Surname from Cypress';

        cy.updateProfile(newName, newSurname);
        cy.getByTestId('ProfileCard.Name').should('have.value', newName);
        cy.getByTestId('ProfileCard.Surname').should('have.value', newSurname);
    });
});
