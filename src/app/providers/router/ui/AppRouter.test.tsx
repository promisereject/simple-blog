import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

import { UserRoles } from '@/entities/User';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
    test('Должна отрендериться страница "О сайте"', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        // findByTestId вместе с async/await используем для lazy-компонентов
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Должна отрендериться страница "404"', async () => {
        componentRender(<AppRouter />, {
            route: '/wtf-page',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект неавторизованного пользователя на главную страницу', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Авторизованный пользователь должен открыть страницу "Профиль"', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('У пользователя отсутствует роль администратора, доступ к админ панели запрещён, редирект на страницу "Доступ запрещён"', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('У пользователя роль администратора, доступ к админ-панели разрешён', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _initiated: true,
                    authData: {
                        roles: [UserRoles.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
