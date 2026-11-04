// Question:Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.



var findAnagrams = function(s, p) {
    let result = [];

    if (p.length > s.length) return result;

    let sCount = new Array(26).fill(0);
    let pCount = new Array(26).fill(0);

    // Count characters of p and first window of s
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }

    // Move the window through s
    for (let i = 0; i <= s.length - p.length; i++) {

        // Check if both frequency arrays are equal
        if (sCount.join("") === pCount.join("")) {
            result.push(i);
        }

        // Remove the previous character
        sCount[s.charCodeAt(i) - 97]--;

        // Add the next character
        if (i + p.length < s.length) {
            sCount[s.charCodeAt(i + p.length) - 97]++;
        }
    }

    return result;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]