import { vol } from 'memfs';
import { ufs } from 'unionfs';
import fs from 'fs';
import path from 'path';

jest.mock('fs', () => require('unionfs').ufs);
jest.mock('fs/promises', () => require('unionfs').ufs.promises);

vol.fromJSON({
    '/foo/bar/baz.txt': 'hello from mock',
});

ufs.use(jest.requireActual('fs')).use(vol);

it('unionfs', async () => {
    const mockedPath = '/foo/bar/baz.txt';
    expect(fs.readFileSync(mockedPath, 'utf8')).toBe('hello from mock');
    await expect(fs.promises.readFile(mockedPath, 'utf8'))
        .resolves.toBe('hello from mock');

    const root = path.join(__dirname, '..', '..', '..');
    const realPath = path.join(root, 'package.json');
    expect(fs.readFileSync(realPath, 'utf8')).toContain('jest-how-do-i-mock-x');
    await expect(fs.promises.readFile(realPath, 'utf8'))
        .resolves.toContain('jest-how-do-i-mock-x');
});