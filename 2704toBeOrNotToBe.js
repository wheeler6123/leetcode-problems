/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/

/**
 * @param {string} val
 * @return {Object}
 */

// P: takes in one of two functions, either () => expect(val).toBe(x) or () => expect(val).notToBe(x);
// R: returns true if eval equates to true, "Not Equal" if .toBe evaluates to false, or "Equal" .toNotBe evaluates to false. Return value should be an object, where if true, return is {'value': true} and if false is {'error': 'Equal' or 'Not Equal'}
// E: func = () => expect(5).toBe(5) => {'value': true};
//    func = () => expect(5).toBe(null) => {'error': 'Not Equal'}
// P: first, need to determine if function evals to true, if so, return {'value': true}
//    if func evals to false, need to determine if the values were equal or not

var expect = function(val) {
    return {
        toBe: (param) => {
            if(val === param){
                return true;
            } else {
                throw new Error('Not Equal');
            }
        },
        notToBe: (param) => {
            if(val !== param){
                return true;
            } else {
                throw new Error('Equal');
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */