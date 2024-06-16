/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// P: two params, first an array of integers, second a function. The input function will take in an int, apply some transformation to it, and return an int
// R: return a new array comprised of integers, where the returned array contains the input array ints transformed by the input function
// E: arr = [1,2,3], fn = function plusOne(n) { return n + 1 }; => [2,3,4]
//    arr = [1,2,3], fn = function plusI(n, i) { return n + i}; => [1,3,5]
//    arr = [10,20,30] fn = function constant() {return 42}; => [42,42,42]
// P: initialize a new array to hold the results of the transformation function
//  iterate through initial array, applying input function to each element and adding that element value to the return array
// return the result array

var map = function(arr, fn) {
    let result = [];
    let length = arr.length;
    for(let i = 0; i<length; i++){
        result[i] = fn(arr[i], i);
    }

    return result;
};