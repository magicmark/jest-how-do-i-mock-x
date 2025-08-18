import { vol, createFsFromVolume } from 'memfs';
import { ufs } from 'unionfs';
import fs from 'fs';
import path from 'path';

jest.mock('fs', () => jest.requireActual('unionfs').ufs);
jest.mock('fs/promises', () => jest.requireActual('unionfs').ufs.promises);
jest.mock('node:fs', () => jest.requireActual('unionfs').ufs);
jest.mock('node:fs/promises', () => jest.requireActual('unionfs').ufs.promises);

const ROOT = path.join(__dirname, '..', '..', '..');

vol.fromJSON({
    [path.join(ROOT, 'README.md')]: 'hi from mocked fs',
    '/foo/bar/baz.txt': 'hi from mocked fs',
});

ufs.use(jest.requireActual('fs')).use(createFsFromVolume(vol));

it('unionfs', async () => {
    // mocked files work
    const mockedPath = '/foo/bar/baz.txt';
    expect(fs.readFileSync(mockedPath, 'utf8')).toBe('hi from mocked fs');
    await expect(fs.promises.readFile(mockedPath, 'utf8')).resolves.toBe('hi from mocked fs');

    // real files work
    const realPath = path.join(ROOT, 'package.json');
    expect(fs.readFileSync(realPath, 'utf8')).toContain('jest-how-do-i-mock-x');
    await expect(fs.promises.readFile(realPath, 'utf8')).resolves.toContain('jest-how-do-i-mock-x');

    // also we can override existing files with mocked files
    const realPath2 = path.join(ROOT, 'README.md');
    expect(fs.readFileSync(realPath2, 'utf8')).toBe('hi from mocked fs');
});
