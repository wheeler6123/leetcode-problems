/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
At most 1000 calls to counter() will be made
*/


/**
 * @param {number} n
 * @return {Function} counter
 */

// P: two inputs, one an integer for the initial value of the counter which could be a whole number between -1000 and 1000, the second an array containing various number of strings that say "call", representing the number of times the function should be called. This array will be between 0 and 1000 in length
// R: the return should be an integer value. The first time the function is called, it should return the input integer, and for each 'call' in the input array, it should return the previous value plus 1.
// E: n = 10, ['call', 'call', 'call'] => 10, 11, 12
//    n = -2, ['call', 'call', 'call', 'call', 'call'] => -2, -1, 0, 1, 2
// P: Question - The constraints indicate an empty array can be passed for calls, but we are not told what to return if the array is empty. What should be returned in this edge case?
// First step is to initialize a counter = n;
// return a function that returns count++;

var createCounter = function(n) {
    let count = n;

    return function() {
        return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */