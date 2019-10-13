/* eslint-disable no-undef */
import { getCount } from "./vowel";

describe('"get vowel count of a string"', ()=> {

    test('should return 5', () => {
        expect(getCount('abracadabra')).toBe(5);
    })

    test('should only accept strings', () => {
        expect(getCount(3)).toThrow(Error);
    })



})