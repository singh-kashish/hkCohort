/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const beforeDate = new Date();
    const beforeTime = beforeDate.getTime();
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    const afterDate = new Date();
    const afterTime = afterDate.getTime();
    return (afterTime - beforeTime)/1000; // time in seconds
}
function simpleCalculateTime(n){
    const beforeDate = new Date();
    const beforeTime = beforeDate.getTime();
    const sum = n*(n+1)/2;
    const afterDate = new Date();
    const afterTime = afterDate.getTime();
    return (afterTime - beforeTime)/1000; // time in seconds
}
console.log(calculateTime(100)); //0
console.log(calculateTime(100000)); //0.004
console.log(calculateTime(1000000000)); // 0.626
//console.log(calculateTime(10000000000)); // Thread blocked for too long
//console.log('s',simpleCalculateTime(100)); //0
//console.log('s',simpleCalculateTime(100000)); //0
//console.log('s',simpleCalculateTime(1000000000)); // Too long
//console.log('s',simpleCalculateTime(10000000000)); // Deadlock
module.exports = calculateTime;