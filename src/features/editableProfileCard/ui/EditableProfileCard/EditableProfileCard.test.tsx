import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { profileReducers } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

const profile: Profile = {
    id: '1',
    name: 'Сергей',
    surname: 'Митрофанов',
    age: 33,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Тверь',
    username: 'sergey',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'sergey' },
        },
    },
    asyncReducers: {
        profile: profileReducers,
    },
};

describe('features/EditableProfileCard', () => {
    test('Readonly mode should switch', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('On cancellation, the values must be reset to previous', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Name'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Surname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Name'), 'С.');
        await userEvent.type(screen.getByTestId('ProfileCard.Surname'), 'М.');

        expect(screen.getByTestId('ProfileCard.Name')).toHaveValue('С.');
        expect(screen.getByTestId('ProfileCard.Surname')).toHaveValue('М.');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Name')).toHaveValue('Сергей');
        expect(screen.getByTestId('ProfileCard.Surname')).toHaveValue('Митрофанов');
    });

    test('An error should appear', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Name'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('If there are no validation errors, a PUT request is sent to the server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.Name'), 'sergey');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
