# Jest: How do I mock x?

Jest is an excellent tool - but with its power comes some amount of complexity. Mocking values in Jest is one such example of complexity, subject to [many blog posts](https://www.google.com/search?q=jest+mock+site%3Amedium.com).

This repo contains [minimal reproducable examples](https://stackoverflow.com/help/minimal-reproducible-example) of where I've been stuck in the past trying to work out how to mock something, and (maybe) the solution.

The aim of this repo is to:

- provide a testing ground for me to try mocking things in a simplified, isolated environment
- help future me come back to a particular solution I came up with in the past
- maybe help others in similar situations :)

Feel free to PR with any other non-trivial examples you've faced!

## Scenarios

- [Mocking a string in an exported object](./src/string-in-exported-object)

## Running the tests

```bash
$ yarn # install node_modules
$ yarn test # runs Jest
```

## Testing philosophy

There are many ways to unit test, and I'm not suggesting what's "good" or "bad". This section just provides context as to why the solutions here may or may not look idiosyncratic.

### Unit testing setup

For the most part, test files usually:

- import something once at the top level
- have a bunch of unit tests over that imported thing
- want to change a mocked value _per test_

I personally don't usually define [manual mock files](https://jestjs.io/docs/en/manual-mocks#mocking-user-modules) for modules, and prefer to inline the mocking where possible. This is because:

- I commonly want to change the mocked value per test (as described above), so I'd have to build in something like `__setMockFiles` (as seen in the the Jest docs example) to provide this "dynamic mock" behaviour.
- I like to [be explicit in tests](https://testing.googleblog.com/2014/07/testing-on-toilet-dont-put-logic-in.html) and see all the "mock logic" inline with the rest of the test
- Keeping a parallel structure of every module I want to mock gets tedious for larger codebases