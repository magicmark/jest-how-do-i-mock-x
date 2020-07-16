import * as greeting from '../greeting.exports';

describe('mocking a function in the same module with exports', () => {
    it('prints default greeting', () => {
        expect(greeting.default()).toBe('hello world!');
    });

    it('prints a greeting with a mock planet 1', () => {
        const mock = jest.spyOn(greeting, 'getPlanet').mockImplementation(() => 'mars');
        expect(greeting.default()).toBe('hello mars!');
        mock.mockRestore();
    });

    it('prints a greeting with a mock planet 1', () => {
        const mock = jest.spyOn(greeting, 'getPlanet').mockImplementation(() => 'jupiter');
        expect(greeting.default()).toBe('hello jupiter!');
        mock.mockRestore();
    });

    it('goes back to default', () => {
        expect(greeting.default()).toBe('hello world!');
    });
});
