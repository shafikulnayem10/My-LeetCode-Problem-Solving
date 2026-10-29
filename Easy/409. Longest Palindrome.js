// Question:
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.


var longestPalindrome = function(s) {
    let count = {};
    let length = 0;

    for (let char of s) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (let char in count) {
        length += Math.floor(count[char] / 2) * 2;
    }

    if (length < s.length) {
        length++;
    }

    return length;
};

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1   