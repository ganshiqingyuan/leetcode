var reverseWords = function(s) {
    var result=''
    s.split(" ").forEach(function(word){
        result+=word.split('').reverse().join('')+' '
    })
    return result.slice(0,result.length-1)
};

//beats 15%  空格分割

var reverseWords = function(s) {
    var result=''
    return s.split(" ").map(function(word){return word.split('').reverse().join('')}).join(" ")
   
};

//map 函数 beat77%