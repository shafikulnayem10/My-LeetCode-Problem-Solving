// Question:Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


let longestPalindrome = (s) => {
    let result = "";

     let expand = (left, right) => {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let odd = expand(i, i);

        // Even length palindrome
        let even = expand(i, i + 1);

        if (odd.length > result.length) {
            result = odd;
        }

        if (even.length > result.length) {
            result = even;
        }
    }

    return result;
};
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"