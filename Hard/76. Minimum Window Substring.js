// Question:
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?

var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let freq = {};

    // Count characters of t
    for (let char of t) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let left = 0;
    let count = 0;

    let minLength = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // If character is needed
        if (freq[char] > 0) {
            count++;
        }

        freq[char] = (freq[char] || 0) - 1;

        // When all characters are found
        while (count === t.length) {

            // Update minimum window
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }

            // Remove left character
            let leftChar = s[left];

            freq[leftChar]++;

            if (freq[leftChar] > 0) {
                count--;
            }

            left++;
        }
    }

    if (minLength === Infinity) return "";

    return s.substring(start, start + minLength);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"   
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""