export const setRate = (starsCount = 5, feedback = 'Отзыв по умолчанию из Cypress') => {
    cy.getByTestId(`StarsRating.${starsCount}`).click();
    cy.getByTestId('Rating.Input').type(feedback);
    cy.getByTestId('Rating.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
