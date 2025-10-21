// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() - Can be used to implement stack's LIFO push
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);
let arr=[5,6,7];
pushExample([1,2,3],[...arr]); // pushing multiple elements using spread operator but an array
pushExample([1,2,3],...arr); // pushing multiple elements using spread operator
// pop() -> removes last element (Used to implement stack's LIFO pop)
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() -> removes first element (Used to implement queue's FIFO pop)
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() -> adds element at the start (Used to implement queue's FIFO push)
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat() -> merges two or more arrays into a new array, does not change the existing arrays
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3,arr1,arr2);
}
concatExample([1, 2, 3], [4, 5, 6], ['a', 'b', 'c']);

// forEach() -> executes a provided function once for each array element(function takes in item and index(can be ignored))
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map() -> creates a new array populated with the results of calling a provided function on every element in the calling array(While using in React to populate UI keys are used - preferably index as key should be avoided) !Doesn't modify original array;
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr, arr);
}
mapExample([1, 2, 3]);

// filter() -> creates a new array with all elements that pass the test implemented by the provided function
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
  console.log("Original Array after filter (unchanged):", arr);
}
filterExample([1, 2, 3, 4, 5]);
filterExample([1,2]); // returns empty array as no element >3

// find() -> returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);
findExample([1,2]); // returns undefined as no element >3

// sort() -> sorts the elements of an array in place and returns the sorted array. Default sort is lexicographical, to sort numerically a compare function is needed a-b pattern for ascending and b-a for descending
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr); // Changes original array
}
sortExample([5, 2, 3, 4, 1]);
