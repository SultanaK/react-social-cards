import emphasize from './emphasize'


describe("emphasize module", () => {
    it("makes the string uppercase and adds an exclamation mark", () => {
        const result = emphasize("i love you");
        expect(result).toEqual("I LOVE YOU!") 
    })

    it("makes the string uppercase and adds an exclamation mark", () => {
        const result = emphasize("");
        expect(result).toBeFalsy();
    })
});
