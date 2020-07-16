import getGreeting from '../greeting.dependency-injection';

describe('mocking a function in the same module with dependency injection', () => {
    it('prints default greeting', () => {
        expect(getGreeting()).toBe('hello world!');
    });

    it('prints a greeting with a mock planet 1', () => {
        expect(getGreeting(() => 'mars')).toBe('hello mars!');
    });

    it('prints a greeting with a mock planet 2', () => {
        expect(getGreeting(() => 'jupiter')).toBe('hello jupiter!');
    });

    it('goes back to default', () => {
        expect(getGreeting()).toBe('hello world!');
    });
});
