/**
 * Divides an array by the given divisions and returns the result as a nested
 * array.
 * If there is an unequal division between the array length and divisions the
 * final chunk (element) will contain the remainder.
 *
 * @param {Array} array - The Array to be divided
 * @param {Number} division - The number of divisions
 * @return {Array} A nested array of the divided chunks
 */
function groupArrayElements(array, divisions) {
  // Check input array is definitely an Array
  if (!Array.isArray(array)) throw new TypeError('Input must be an array');
  // Check input divisions is a positive integer
  if (!Number.isInteger(divisions) || divisions <= 0)
    throw new TypeError('Divisions must be a positive integer');

  // Find the length of each chunck
  const divide = Math.ceil(array.length / divisions);

  let newArray = [];

  // Move along the array at each division
  for (let count = 0; count < array.length; count += divide) {
    // Slice the array at division and add chunck to new array
    newArray.push(array.slice(count, count + divide));
  }

  return newArray;
}

module.exports = groupArrayElements;
