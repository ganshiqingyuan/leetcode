Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.


var isPalindrome = function(s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse().join('')==s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
};

//easy 难度，一行解决



