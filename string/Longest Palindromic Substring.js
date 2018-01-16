Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"



/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var arr=''
    var result=''
    function findpalin(result,a,b){
        while(a>-1&&b<s.length&&s[a]==s[b]){
            if(a==b){
                result=s[a]
            }
            else
            result=s[a]+result+s[b]
            a--;
            b++;
        }
        if(result.length>arr.length){
            arr=result
        }
    }
    for(var i=0;i<s.length;i++){
        result=''
        findpalin(result,i,i)
        findpalin(result,i,i+1)
    }
    return arr
};
//320ms   beat 30%  the same as the length of palindromic


