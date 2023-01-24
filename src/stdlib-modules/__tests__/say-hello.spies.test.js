import childProcess from 'child_process';
import sayHello from '../say-hello';

afterEach(() => {
    jest.restoreAllMocks();
});

it('uses a mock value', () => {
    jest.spyOn(childProcess, 'execFileSync').mockReturnValue('bonjour mars');
    expect(sayHello()).toBe('bonjour mars');
    expect(childProcess.execFileSync).toHaveBeenCalledWith(
        "echo", ["hello", "world"], { "encoding": "utf8" }
    );
});

it('works when unmocked', () => {
    expect(sayHello()).toBe('hello world');
});
