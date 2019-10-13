import isSquare from "./square";

describe('is it square?', () => {
    test('a-1: Negative numbers cannot be square numbers', () => {
        const result = isSquare(-1);

        expect(result).toEqual(false);
    })

});
