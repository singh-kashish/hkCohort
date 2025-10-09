/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  let map = new Map();
  for(let i=0;i<str1.length;i++){
    let char1 = str1[i].toLowerCase();
    let char2 = str2[i].toLowerCase();
    map.set(char1,(map.get(char1)|0)+1);
    map.set(char2,(map.get(char2)|0)-1);
  }
  for(let value of map.values()){
    if(value !== 0) return false;
  }
  return true;
}
module.exports = isAnagram;
