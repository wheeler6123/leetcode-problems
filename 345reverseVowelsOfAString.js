// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */

const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

var reverseVowels = function(s) {
    let sVowels = [];
    let sChars = s.split('');

    for(let i = 0; i < sChars.length; i++){
        if(vowels.has(sChars[i])){
            sVowels.push(sChars[i]);
        }
    }

    for(let j = 0; j < sChars.length; j++){
        if(vowels.has(sChars[j])){
            sChars[j] = sVowels.pop();
        }
    }
    
    return sChars.join('');
};