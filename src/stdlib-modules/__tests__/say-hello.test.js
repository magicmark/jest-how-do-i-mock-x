import childProcess from 'child_process';
import sayHello from '../say-hello';

jest.mock('child_process');

it('uses a mock value', () => {
    jest.mocked(childProcess).execFileSync.mockReturnValue('bonjour mars');
    expect(sayHello()).toBe('bonjour mars');
    expect(childProcess.execFileSync).toHaveBeenCalledWith(
        "echo", ["hello", "world"], { "encoding": "utf8" }
    );
});

it('works when unmocked', () => {
    jest.mocked(childProcess).execFileSync.mockImplementation(
        jest.requireActual('child_process').execFileSync
    ); // you may want to move this to the module level if you don't want to explicity do this each test

    expect(sayHello()).toBe('hello world');
});
