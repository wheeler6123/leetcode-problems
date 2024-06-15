/**
 * @return {Function}
 */

// P: input could be anything, from empty to array of various element types
// R: return should be a function, and said function should always return 'Hello World'
// E: input = args = []; output = 'Hello World'
//    input = args = [{}, null, 42]; output = 'Hello World';
// P: return an anonymous function that simply returns 'Hello World'

const createHelloWorld = (args) => () => 'Hello World';

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */