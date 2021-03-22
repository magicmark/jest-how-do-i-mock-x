import cleanDirectory from '../clean-directory';

jest.mock('fs'); // check out ../__mocks__/fs.js to see why this works!

test('cleanDirectory() wipes away contents of /foo/bar/baz with 2 files', () => {
    require('fs').__setVolumeContents({
        '/foo/bar/baz/qux1.txt': 'hello',
        '/foo/bar/baz/qux2.txt': 'world',
    });

    const numFilesDeleted = cleanDirectory();
    expect(numFilesDeleted).toBe(2);
});

test('cleanDirectory() wipes away contents of /foo/bar/baz with 3 files', () => {
    require('fs').__setVolumeContents({
        '/foo/bar/baz/one.txt': '1',
        '/foo/bar/baz/two.txt': '2',
        '/foo/bar/baz/three.txt': '3',
    });

    const numFilesDeleted = cleanDirectory();
    expect(numFilesDeleted).toBe(3);
});
