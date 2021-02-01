beforeAll(async (done) => {
    done();
});

afterAll(async (done) => {
    done();
});

describe("Test suma", () => {
    test("it should sum two num", async (done) => {
        let input = (2 + 2);
        expect(input).toEqual(4);
        done();
    });
});