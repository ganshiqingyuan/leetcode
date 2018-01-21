Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.


var reverseWords = function(str) {
    return (str.split(" ").reverse().filter(data=>{if(data){return true}return false})).join(' ')
};

//一行解决。。 beat 50%，medium



