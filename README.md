# Jest: How do I mock x?

This repo contains runnable [minimal reproducable examples](https://stackoverflow.com/help/minimal-reproducible-example) of where I've been stuck in the past trying to work out how to mock something, and (maybe) the solution.

The aim of this repo is to:

-   provide a testing ground for me to try mocking things in a simplified, isolated environment
-   help future me come back to a particular solution I came up with in the past
-   maybe help others in similar situations :)

Feel free to PR with any other jest testing puzzles you've faced!

## Scenarios

-   [Mocking a function in the same module](./src/function-in-same-module)
-   [Mocking a string in an exported object](./src/string-in-exported-object)
-   [Mocking node global values (e.g. `process.platform`)](./src/process-globals)
-   [Mocking the filesystem (e.g. `fs.readdir`)](./src/filesystem)
-   [Mocking a stdlib module (e.g. `childProcess.execFile`) wihout \_\_mocks__](./src/stdlib-modules)

## Running the tests

```bash
$ yarn # install node_modules
$ yarn test # runs Jest
```

## Further reading / Prior art

-   https://jestjs.io/docs/en/mock-function-api
-   https://github.com/kentcdodds/how-jest-mocking-works
-   https://github.com/kentcdodds/js-mocking-fundamentals
-   https://github.com/kentcdodds/js-testing-fundamentals

## Testing approach

There are many ways to unit test, and I'm not suggesting what's "good" or "bad". This section just provides context as to why the solutions here may or may not look idiosyncratic.

### Unit testing setup

For the most part, test files usually:

-   import something once at the top level
-   have a bunch of unit tests over that imported thing
-   want to change a mocked value _per test_

I personally don't usually define [manual mock files](https://jestjs.io/docs/en/manual-mocks#mocking-user-modules) for modules, and prefer to inline the mocking where possible. This is because:

-   I commonly want to change the mocked value per test (as described above), so I'd have to build in something like `__setMockFiles` (as seen in the the Jest docs example) to provide this "dynamic mock" behaviour.
-   I like to [be explicit in tests](https://testing.googleblog.com/2014/07/testing-on-toilet-dont-put-logic-in.html) and see all the "mock logic" inline with the rest of the test
-   Keeping a parallel structure of every module I want to mock gets tedious for larger codebases
