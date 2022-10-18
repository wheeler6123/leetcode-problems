/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 //P: two inputs, both strings that will not be empty and will consist of lowercase letters
 //R: return a boolean value for whether or not the letters needed to make the ransom note are contained within the magazine
 //E: 'a', 'b' => false
    // 'aa', 'ab' => false
    // 'aa', 'aab' => true
//P: use for of to check for the character in the ransome note's presence in magazine. Remove one instance of character in magazine if found, and continue iterating through ransom note
    // if a char not present, return false
    // if the loop completes, return true

    var canConstruct = function(ransomNote, magazine) {
        for (char of ransomNote){
            if(magazine.includes(char)){
                magazine = magazine.replace(char, '')
            } else{
                return false;
            }
        }return true;
    };