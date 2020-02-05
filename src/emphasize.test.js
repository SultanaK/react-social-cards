import emphasize from './emphasize'

describe('emphasize', () => { // Test suite
    it('makes string uppercase and adds exclamation mark', () => { // Test case
        const result = emphasize("I love you")
        expect(result).toEqual("I LOVE YOU!"); // Assertion
    });

    it('returns false if string is empty', () => { 
        const result = emphasize("");
        expect(result).toBeFalsy();
    });
});