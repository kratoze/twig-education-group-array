const groupArrayElements = require('../src/groupArrayElements');

const evenArray = [1, 2, 3, 4, 5, 6];
const oddArray = [1, 2, 3, 4, 5, 6, 7];
const evenArrayExpectedResult = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const oddArrayExpectedResult = [[1, 2, 3], [4, 5, 6], [7]];
const divisions = 3;

describe('groupArrayElements function', () => {
  it('should return an array', () => {
    expect(groupArrayElements(evenArray, divisions) instanceof Array).toBe(
      true
    );
  });

  it('should throw TypeError if array parameter is not type of Array', () => {
    expect(() => {
      groupArrayElements('not an array', divisions);
    }).toThrowError('Input must be an array');
  });

  it('should throw TypeError if divisions is not an integer', () => {
    expect(() => {
      groupArrayElements(evenArray, 'not a number');
    }).toThrowError('Divisions must be a positive integer');
  });

  it('should throw TypeError if divisions is not positive', () => {
    expect(() => {
      groupArrayElements(evenArray, -1);
    }).toThrowError('Divisions must be a positive integer');
  });

  it('should divide the array equally given equally divisible integers', () => {
    expect(groupArrayElements(evenArray, divisions)).toEqual(
      evenArrayExpectedResult
    );
  });

  it('should divide the array leaving a remainder given unequally divisible integers', () => {
    expect(groupArrayElements(oddArray, divisions)).toEqual(
      oddArrayExpectedResult
    );
  });
});
