A function written for Twig Education Front-End Web Developer role.

Given an array and a number of divisions the groupArrayElements function divides the array and returns the chunks as nested arrays.

### Usage

Copy the project to your lib folder or anywhere in your project

```
	cd project/lib
	git clone https://github.com/kratoze/twig-education-group-array.git
```

To use in your project require groupArrayElements from the package

```javascript
const groupArrayElements = require('./lib/twig-education-group-array');

console.log(groupArrayElements([1, 2, 3, 4, 5, 6], 3)); // [[1, 2], [3, 4], [5, 6]]
```

### Available Commands

Run `npm i` to make sure packages are installed.

| Command | Description    |
| ------- | -------------- |
| `jest`    | Run test suite |

### Documentation

##### groupArrayElements(array, division) ⇒ <code>Array</code>
Divides an array by the given divisions and returns the result as a nested
array.
If there is an unequal division between the array length and divisions the
final chunk (element) will contain the remainder.

**Kind**: global function
**Returns**: <code>Array</code> - A nested array of the divided chunks

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The Array to be divided |
| division | <code>Number</code> | The number of divisions |
