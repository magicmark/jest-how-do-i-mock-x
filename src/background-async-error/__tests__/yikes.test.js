import main from '../yikes';

jest.useFakeTimers();

it('catches error and allows promise to resolve', async () => {
    const resultPromise = main();

    expect.assertions(2);

    // This will trigger the setTimeout callback that throws
    try {
        jest.advanceTimersToNextTimer();
    } catch (error) {
        // Error is expected to be thrown here - we can ignore it
        expect(error.message).toBe('yikes');
    }

    // Check that the promise resolves correctly
    await expect(resultPromise).resolves.toBe('yo');
});