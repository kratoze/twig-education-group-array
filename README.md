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
	const groupArrayElements = require(./lib/groupArrayElements);

	console.log(groupArrayElements([1,2,3,4,5,6], 3)); // [[1,2], [3, 4], [5,6]]
```

### Available Commands

| Command | Description    |
| ------- | -------------- |
| jest    | Run test suite |
