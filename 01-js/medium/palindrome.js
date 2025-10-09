/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    if(typeof str !== 'string' || str.length===0) return true;
    let left = 0;
    let right = str.length - 1;
    while(left < right){
      if(str[left].toLowerCase() >= 'z' || str[left].toLowerCase() < 'a'){
          left++;
          continue;
      }
      if(str[right].toLowerCase() >= 'z' || str[right].toLowerCase() < 'a'){
          right--;
          continue;
      }
        if(str[left].toLowerCase() !== str[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

module.exports = isPalindrome;
