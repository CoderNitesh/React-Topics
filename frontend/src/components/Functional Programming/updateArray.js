const number = [1, 2, 3];
const updateNumber = [...number, 4];
console.log(updateNumber);
console.log(number);

// some advanced techniques
const numberArray = [1, 2, 3, 4, 29, 5, 6, 7, 8, 9, 0];

// Adding
const index = numberArray.indexOf(29);
const added = [...numberArray.slice(0, index), 28, ...numberArray.slice(index)];
console.log(added);

// Removing
const remove = numberArray.filter((n) => n !== 28);
console.log(remove);

// Update
const updateArray1 = numberArray.map((n) => (n === 29 ? 5 : n));
console.log(updateArray1);
