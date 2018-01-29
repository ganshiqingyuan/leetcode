//https://leetcode.com/problems/plus-one/description/
//2018 1 29
//js bird

Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.



/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
        
    var n = digits.length;
    for(var i=n-1; i>=0; i--) {
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        
        digits[i] = 0;
    }
    
    var newNumber = new Array(n+1).fill(0);
    newNumber[0] = 1;
    
    return newNumber;

};
//这题题意这是真难懂


