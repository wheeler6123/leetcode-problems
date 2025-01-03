// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 // P: two inputs, both strings of uppercase letters with length between 1 and 1000
 // R: return a string representing the largest string, x, that divides both input strings
 //    if strings have no common divisor, return an empty string
 // E: 'ABCABC', 'ABC' => 'ABC'
 //    'ABABAB', 'ABAB' => 'AB'
 //    'LEET', 'CODE' => ''
 // P: verify if inputs are divisible by checking that str1 + str2 is the same as str2 + str1, if not, return ''
 //    if inputs are divisible, find the greatest common denominator for the two string lengths
 //    get a substring that runs from 0 to the greatest common denominator length and return 

 function gcd(a,b){
    if (b === 0){
        return a;
    }
    return gcd(b, a%b);
}

var gcdOfStrings = function(str1, str2){
    if(str1 + str2 !== str2 + str1) return '';
    let gcdNumeric = gcd(str1.length, str2.length);
    return str1.substring(0, gcdNumeric);
}
