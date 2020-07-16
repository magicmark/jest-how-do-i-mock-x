# Mocking Example: A function used by another function in the same module

In [`greeting.js`](./greeting.js) we have the following functions:

```js
export function getPlanet () {
    return 'world';
}

export default function getGreeting () {
    return `hello ${getPlanet()}!`;
}
```

## The challenge

We want mock out `getPlanet` when testing `getGreeting` _per test_.

## Prior art

This puzzle in particular seems to bamboozle quite a few folks - here's a bunch
of stackoverflows/blogs etc discussing approaches to this issue (or similar):

- https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest/ _(full disclosure: that's me asking)_
- https://medium.com/@qjli/how-to-mock-specific-module-function-in-jest-715e39a391f4
- https://github.com/facebook/jest/issues/936
- https://luetkemj.github.io/170421/mocking-modules-in-jest
- (PR to add more!)

## Solution

Here's a tl;dr of the solutions usually suggested:

1) Use `exports.getPlanet()` instead of `getPlanet()`
2) Use dependency injection
3) Refactoring into a class, or move `getPlanet` to a seperate file
4) Use babel-plugin-rewire ([example](https://stackoverflow.com/a/52725067/4396258))

This repo shows examples for the following approaches

- [#1 (using exports.)](./__tests__/greeting.exports.test.js)
- [#2 (dependency injection)](./__tests__/greeting.dependency-injection.test.js)

All are valid approaches (my personal preference is for dependency injection)