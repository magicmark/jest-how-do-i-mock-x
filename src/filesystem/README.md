# Mocking Example: Interacting with the filesystem

For example in `clean-directory.js` we have the following function:

```js
export default function cleanDirectory() {
    const files = fs.readdirSync(DIR_TO_CLEAN).map((f) => path.join(DIR_TO_CLEAN, f));

    files.forEach((file) => {
        fs.unlinkSync(file);
    });

    return files.length;
}
```

## The challenge

We want mock out the contents of the filesystem _per test_.

## Solution

[See the tests](./__tests__)

## Alternatives

1. **Dependency injection.** We could have `fs` or `readdirSync` and `unlink` be
   default arguments to the `cleanDirectory` function:

   ```js
   export default function cleanDirectory(_readdirSync = readdirSync, _unlink = unlink) {
   ```

   Given the availability of battle-tested modules to mock out the file system,
   I think it's a nicer development experience to use one of those (e.g. memfs,
   mock-fs) - rather writing our own `readdirSync` and `unlink` functions each
   time and littering our function interface.