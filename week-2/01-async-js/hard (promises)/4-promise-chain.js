/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return modularWait(t);
}

function wait2(t) {
    return modularWait(t);
}

function wait3(t) {
    return modularWait(t);
}

function modularWait(t){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        }, t*1000);
    });
    return promise;
}

// function calculateTime(t1, t2, t3) {
//     const start = Date.now();
//     return wait1(t1).then(()=>{
//         return wait2(t2).then(()=>{
//             return wait3(t3).then(()=>{
//                 const end = Date.now();
//                 return end - start;
//             });
//         });
//     })
// }

// Flattened version of the above function using ES6 arrow functions
function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return wait1(t1)
        .then(()=>wait2(t2))
        .then(()=>wait3(t3))
        .then(()=>{
            const end = Date.now();
            return end - start;
        });
};

module.exports = calculateTime;
