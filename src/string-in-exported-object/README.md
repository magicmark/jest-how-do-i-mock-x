# Mocking Example: A string in an exported object

In `beefStewRecipe.js`, we define and export a dict that looks like this:

```js
export default {
  method: ['some', 'array'],
  ingredients: ['another', 'array'],
  source: 'a simple string that we want to try mocking out',
}
```

In `formatRecipe.js`, we import `beefStewRecipe.js` at the top level, and use the strings in the `formatRecipe()` function:

```js
import recipe from './beefStewRecipe';

function formatRecipe() {
    return `...
    Recipe source: ${recipe.source}`;
}
```

## The challenge

We want mock out the recipe `source` attribute _per test_.