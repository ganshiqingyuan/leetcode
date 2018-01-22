Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".



 var reverseString = function(s) {
    var result=''
    for(var i=0;i<s.length;i++){
        result+=s[s.length-i-1]
    }
    return result
};

//128ms   

var reverseString = function(s) {
    return s.split('').reverse().join('')
};
//121 ms这个竟然比for循环快



