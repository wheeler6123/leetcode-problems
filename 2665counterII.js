// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
 

// Constraints:

// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// P: two inputs, the first an integer which should be the initial base value for the counter, the second an array of method calls that can be either 'increment', 'reset', or 'decrement'
// R: return an integer with the correct method applied to the value. 'reset' should reset the counter to the initial base value
// E: init = 5, calls = ['increment', 'reset', 'decrement'] => [6, 5, 4]
// P: initialize a counter variable equal to the input int
// return a function with 3 inner functions, one for each method, that applies the correct logic to the counter var

var createCounter = function(init) {
    let initVal = init;
    let count = init;

    return {
        increment: () => {
            return ++count;
        },
        reset: () => {
            count = initVal;
            return count;
        },
        decrement: () => {
            return --count;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */