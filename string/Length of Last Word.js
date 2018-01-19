Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5





var lengthOfLastWord = function(s) {
    var str=s.split(' ')
    for(var i=str.length-1;i>-1;i--){
        if(str[i]){
            return str[i].length
        }
    }
    return 0
};

//beats 60%  有进步了，，，easy难度快速解决



