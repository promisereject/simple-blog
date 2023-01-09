import { EditableProfileCard } from '../../src/features/editableProfileCard';

import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.ts', () => {
    it('Изменить имя', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile-card.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '3',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id="3" />
            </TestProvider>,
        );

        // TODO: Написать тест кейс
    });
});
