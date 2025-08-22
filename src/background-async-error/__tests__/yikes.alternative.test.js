import main from '../yikes';

jest.useFakeTimers();

it('catches error using uncaughtException handler', async () => {
    // Store the original uncaughtException handlers
    const originalHandlers = process.listeners('uncaughtException');
    process.removeAllListeners('uncaughtException');
    
    // Set up a handler to catch uncaught exceptions
    let uncaughtError = null;
    process.on('uncaughtException', (error) => {
        uncaughtError = error;
        // Prevent the process from exiting
        return true;
    });
    
    // Run the function that will cause an error
    const resultPromise = main();
    
    // Advance the timers to trigger the error
    jest.advanceTimersByTime(500);
    
    // Check that we got the error from the setTimeout
    expect(uncaughtError).toBeDefined();
    expect(uncaughtError.message).toBe('yikes');
    
    // Advance the timers to resolve the asyncSetTimeout promise
    jest.advanceTimersByTime(500);
    
    // Check the result of the asyncSetTimeout promise
    await expect(resultPromise).resolves.toBe('yo');
    
    // Restore original handlers
    process.removeAllListeners('uncaughtException');
    originalHandlers.forEach(handler => {
        process.on('uncaughtException', handler);
    });
});
