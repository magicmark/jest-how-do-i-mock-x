import getPlatform from '../get-platform';

describe('mocking a process global', () => {
    // We need to copy/restore the whole property definition, not just the raw value
    const realPlatform = Object.getOwnPropertyDescriptor(process, 'platform');

    afterEach(() => {
        // Restore the real property value after each test
        Object.defineProperty(process, 'platform', realPlatform);
    });

    it("prints default (on my laptop, 'darwin' - this test will fail if running on linux", () => {
        expect(getPlatform()).toBe('darwin');
    });

    it('prints a mock value 1', () => {
        Object.defineProperty(process, 'platform', {
            ...Object.getOwnPropertyDescriptor(process, 'property'),
            value: 'foo',
        });

        expect(process.platform).toBe('foo');
    });

    it('prints a mock value 2', () => {
        Object.defineProperty(process, 'platform', {
            ...Object.getOwnPropertyDescriptor(process, 'property'),
            value: 'bar',
        });

        expect(getPlatform()).toBe('bar');
    });

    it('goes back to default', () => {
        expect(getPlatform()).toBe('darwin');
    });
});
