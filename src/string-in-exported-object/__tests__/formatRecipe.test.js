describe('mocking a string value in an exported object', () => {
    beforeEach(() => {
        // @see https://github.com/facebook/jest/issues/5474#issuecomment-363542111
        jest.resetModules();
        jest.dontMock('../beefStewRecipe');
    });

    it('first mocked value is used', async () => {
        jest.doMock('../beefStewRecipe', () => ({
            ingredients: ['foo', 'bar'],
            method: ['bar', 'baz'],
            source: 'Julia Child',
        }));

        const formatRecipe = (await import('../formatRecipe')).default;
        expect(formatRecipe()).toMatch(/Recipe source: Julia Child/);
    });

    it('a second test mocked value is used', async () => {
        jest.doMock('../beefStewRecipe', () => ({
            ingredients: ['foo', 'bar'],
            method: ['bar', 'baz'],
            source: 'Marco Pierre White',
        }));

        const formatRecipe = (await import('../formatRecipe')).default;
        expect(formatRecipe()).toMatch(/Recipe source: Marco Pierre White/);
    });

    it('resetting the value in between tests works, and resets to the default', async () => {
        const formatRecipe = (await import('../formatRecipe')).default;
        expect(formatRecipe()).toMatch(/Recipe source: Gordon Ramsay/);
    });
});
