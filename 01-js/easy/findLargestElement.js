/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!Array.isArray(numbers) || numbers.length===0)return undefined;
    let largest = -Infinity;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] === undefined || numbers[i] === null) continue;
        const num = Number(numbers[i]);
        if(isFinite(num)===false) continue;
        if(num>largest) largest = num;
    }
    return largest === -Infinity ? null : largest;
}

module.exports = findLargestElement;