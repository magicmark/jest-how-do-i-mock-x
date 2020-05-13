import recipe from './beefStewRecipe';

/**
 * Given a recipe, print a set of instructions.
 * 
 * We're going to test mocking out `recipe.source`, in the test file.
 */
export default function formatRecipe() {
    return `To cook this recipe, gather the following ingredients:

    ${recipe.ingredients.join('\n')}

    Once you have the ingredients, follow the following steps:

    ${recipe.method.join('\n')}

    Enjoy!

    Recipe source: ${recipe.source}`;
}
