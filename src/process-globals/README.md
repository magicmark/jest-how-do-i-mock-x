# Mocking Example: A global `process` attribute

In `get-platform.js` we have the following function:

```js
export default function getPlatform() {
    return process.platform;
}
```

## The challenge

We want mock out the value of `process.platform` _per test_.

### Gotchas

You can't directly overwrite the value and restore (e.g. `process.platform = 'foo'`)
because if you inspect the object property, 'writeable' is set to false:

```
$ node -p "Object.getOwnPropertyDescriptor(process, 'platform')"
{
  value: 'darwin',
  writable: false,
  enumerable: true,
  configurable: true
}
```

## Solution

[See the tests](./__tests__/get-platform.test.js)

## Discussion

See: <https://github.com/facebook/jest/issues/2227>

A generalized version of this has been suggested here:
<https://github.com/facebook/jest/issues/2227#issuecomment-634464230>
