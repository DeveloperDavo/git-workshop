
describe("humans", () => {
    const Humans = require ('../src/Humans');
    let humans;

    beforeEach(() => {
        humans = new Humans();
    });

    it("getNames should return empty string", () => {
        expect(humans.getNames()).toBe("");
    });
});
