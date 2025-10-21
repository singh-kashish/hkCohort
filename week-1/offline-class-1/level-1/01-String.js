// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf -> Gives first occurrence's index of target substring, if not found returns -1
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "-1");

// lastIndexOf -> Gives last occurrence's index of target substring, if not found returns -1
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "apple");
 
// slice -> Extracts a section of a string and returns it as a new string, if -n is provided as start/end, it is treated as str.length + (-1)
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
  console.log("Original String after slice (unchanged):", str);
}
getSlice("Hello World", -2, "Hello World".length);

// substring - Deprecated version of slice, does not accept negative indices for end, for start negative values are treated as 0
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
  console.log("Original String after substring (unchanged):", str);
}
getSubstring("Hello World", -2, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
// 1) String target: replaces first occurrence only
replaceString("Hello World", "World", "JavaScript");
// Original String: Hello World
// After replace: Hello JavaScript
// Comment: String "World" found once; replace() with a string target replaces only the first match.

// 2) String target with multiple occurrences: still only first occurrence replaced
replaceString("Hello World World", "World", "JavaScript");
// Original String: Hello World World
// After replace: Hello JavaScript World
// Comment: Only the first "World" is replaced because string target does not do global replacement.

// 3) Regex /World/g: global flag replaces all occurrences (case-sensitive)
replaceString("Hello World World", /World/g, "JavaScript");
// Original String: Hello World World
// After replace: Hello JavaScript JavaScript
// Comment: /World/g matches all "World" (case-sensitive), both replaced.

// 4) Regex /world/i: case-insensitive, single replacement (no g flag)
replaceString("Hello World World", /world/i, "JavaScript");
// Original String: Hello World World
// After replace: Hello JavaScript World
// Comment: /world/i matches the first "World" ignoring case; only first match replaced without /g.

// 5) Regex /world/gi: global + case-insensitive
replaceString("Hello World World", /world/gi, "JavaScript");
// Original String: Hello World World
// After replace: Hello JavaScript JavaScript
// Comment: /world/gi matches all "World" occurrences ignoring case; both replaced.

// 6) Regex /fo/g: matches "fo" sequences globally
replaceString("foo bar foo", /fo/g, "baz");
// Original String: foo bar foo
// After replace: bazo bar bazo
// Comment: /fo/g matches the "fo" in "foo" (twice). Replacement yields "bazo bar bazo" because the trailing 'o' remains.

// 7) Regex /FO/gi: case-insensitive "FO" globally
replaceString("foo bar foo", /FO/gi, "baz");
// Original String: foo bar foo
// After replace: bazo bar bazo
// Comment: /FO/gi matches "fo" in any case; same result as previous line.

// 8) Regex /o+/g: one or more consecutive 'o's globally
replaceString("foo bar foo", /o+/g, "X");
// Original String: foo bar foo
// After replace: fX bar fX
// Comment: /o+/g matches "oo" in each "foo"; each run replaced with "X".

// 9) Regex /o{2}/g: exactly two 'o's globally
replaceString("fooo bar foo", /o{2}/g, "X");
// Original String: fooo bar foo
// After replace: fXo bar fX
// Comment: /o{2}/g matches "oo" substrings. In "fooo", it matches the first two 'o's (leftmost), leaving one 'o'. In "foo", matches the two 'o's.

// 10) Regex /o{1,2}/g: one or two 'o's, greedy, globally
replaceString("foooo bar foo", /o{1,2}/g, "X");
// Original String: foooo bar foo
// After replace: fXX bar fX
// Comment: Quantifier is greedy; it matches the longest possible (2 'o's) then continues. "foooo" becomes two matches "oo" + "oo" => "XX". "foo" => "oo" => "X".

// 11) Regex /o{2,}/g: two or more 'o's globally
replaceString("foooo bar foo", /o{2,}/g, "X");
// Original String: foooo bar foo
// After replace: fX bar fX
// Comment: Matches any run of >=2 'o's as a single match. "foooo" (4 o's) => one replacement "X"; "foo" (2 o's) => one "X".

// 12) Regex /f./g: 'f' followed by any single character, globally
replaceString("foo bar foo", /f./g, "X");
// Original String: foo bar foo
// After replace: Xo bar Xo
// Comment: /f./g matches "fo" (twice). The remaining trailing 'o' in each "foo" stays.

// 13) Regex /f.*r/g: 'f' then any chars greedily up to last 'r' (same line), globally
replaceString("foo bar foo", /f.*r/g, "X");
// Original String: foo bar foo
// After replace: X foo
// Comment: Greedy .* consumes from the first 'f' to the last 'r' in the string => matches "foo bar". Replaced once with "X".

// 14) Regex /f.*?r/g: 'f' then any chars lazily up to nearest 'r', globally
replaceString("foo bar foo", /f.*?r/g, "X");
// Original String: foo bar foo
// After replace: X foo
// Comment: Lazy .*? stops at the first 'r' after 'f'. In "foo bar foo", that's "foo bar". There’s only one 'f' before that 'r', so a single replacement yields "X foo".

console.log("Target not in string:");
replaceString("foo bar foo", "xyz", "X");
// Original String: foo bar foo
// After replace: foo bar foo
// Comment: No match for "xyz" using string target; replace() returns the original string unchanged.

console.log("Using newline character:");
replaceString("foo\nbar foo", "str", "X");
// Original String: foo
// bar foo
// After replace: foo
// bar foo
// Comment: No match for "str"; newline in the input doesn't affect behavior with a string target. Output unchanged.
{/*Notes on replace behavior:
 • String target replaces only the first occurrence.
 • Regex target without g flag replaces only the first match.
 • Regex with g flag replaces all matches.
 • i flag makes matching case-insensitive.
 • Quantifiers:
 ▫ 
 ⁃ means “one or more”
 ▫ {n} exactly n
 ▫ {n,} at least n
 ▫ {m,n} between m and n, greedy by default
 • Dot . matches any character except newline by default.
 • .* is greedy; .*? is lazy.

What if no patterns are found?
 • replace returns the original string unchanged.
 • Your function will print:
 ▫ Original String:     <original>
 ▫ After replace:     <original>

Assumptions:
 • Using JavaScript’s String.prototype.replace with default behavior (no replaceAll).
*/}
// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
splitString("apple,banana,cherry", "");
splitString("apple,banana,cherry", ".");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", `'${str.trim()}'`);
  console.log("Original String after trim (unchanged):", `'${str}'`);
}
trimString(" Hello World ");

// TrimStart
function trimStartString(str) {
  console.log("Original String:", str);
  console.log("After trimStart:", `'${str.trimStart()}'`);
  console.log("Original String after trimStart (unchanged):", `'${str}'`);
}
trimStartString("   Hello World  ");
//TrimEnd
function trimEndString(str) {
  console.log("Original String:", str);
  console.log("After trimEnd:", `'${str.trimEnd()}'`);
  console.log("Original String after trimEnd (unchanged):", `'${str}'`);
}
trimEndString("   Hello World  ");
// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
  console.log("Original String after toUpperCase (unchanged):", str);
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
  console.log("Original String after toLowerCase (unchanged):", str);
}
toLower("Hello World");
