export const updateProfile = (name: string, surname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Name').clear().type(name);
    cy.getByTestId('ProfileCard.Surname').clear().type(surname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'fake' },
        body: {
            id: '3',
            name: 'Test',
            surname: 'User',
            age: 99,
            currency: 'RUB',
            country: 'Russia',
            city: 'Москва',
            username: 'testuser',
            avatar: 'https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name: string, surname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
