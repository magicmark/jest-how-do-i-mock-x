import cleanDirectory from '../clean-directory';
import { vol } from 'memfs';
import fs from 'fs';

jest.mock('fs', () => jest.requireActual('memfs').fs);

test('cleanDirectory() wipes away contents of /foo/bar/baz with 2 files', () => {
    vol.fromJSON({
        '/foo/bar/baz/qux1.txt': 'hello',
        '/foo/bar/baz/qux2.txt': 'world',
    });

    const numFilesDeleted = cleanDirectory();

    expect(numFilesDeleted).toBe(2);
    expect(fs.readdirSync('/foo/bar/baz')).toHaveLength(0);
});

test('cleanDirectory() wipes away contents of /foo/bar/baz with 3 files', () => {
    vol.fromJSON({
        '/foo/bar/baz/one.txt': '1',
        '/foo/bar/baz/two.txt': '2',
        '/foo/bar/baz/three.txt': '3',
    });

    const numFilesDeleted = cleanDirectory();

    expect(numFilesDeleted).toBe(3);
    expect(fs.readdirSync('/foo/bar/baz')).toHaveLength(0);
});
