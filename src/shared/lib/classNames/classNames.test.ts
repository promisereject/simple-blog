import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'first second third';
        expect(classNames('first', {}, ['second third'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'first second third hovered scrollable';
        expect(
            classNames('first', { hovered: true, scrollable: true }, [
                'second third',
            ]),
        ).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'first second third scrollable';
        expect(
            classNames('first', { hovered: false, scrollable: true }, [
                'second third',
            ]),
        ).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'first second third hovered';
        expect(
            classNames('first', { hovered: true, scrollable: undefined }, [
                'second third',
            ]),
        ).toBe(expected);
    });
});
