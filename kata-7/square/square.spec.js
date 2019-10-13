const isSquare = require("./square");

describe("isSquare test", () => {
    test('a-1: Negative numbers cannot be square numbers', () => {
        const result = isSquare(-1);

        expect(result).toEqual(false);
    })

    test('0 is a square number (0 * 0)"s', () => {
        const result = isSquare(0);

        expect(result).toEqual(true);
    })

    test('3 is not a square number', () => {
        const result = isSquare(3);
        expect(result).toEqual(false);
    })

    test('4 is a square number (2 * 2)', () => {
        const result = isSquare(4);
        expect(result).toEqual(true);

    })
    test('26 is not a square number', () => {
        const result = isSquare(26);
        expect(result).toEqual(false);

    })

})