import config from "../config/config.json";
beforeAll(async (done) => {
    console.log("uri: ","mongodb+srv://test:");
    //await mongodb.connect();
    done();
});

afterAll(async (done) => {
    //await mongodb.close();
    done();
});

describe("Test suma", () => {
    test("it should sum two num", async (done) => {
        let input = (2 + 2);
        expect(input).toEqual(4);
        done();
    });
});