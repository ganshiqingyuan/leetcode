

Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"





var reverseStr = function(s, k) {
    var str=''
    for(var i=0;i<s.length/k;i++){
        if((i+1)/2==parseInt((i+1)/2)){
            str+=s.substr(i*k,k)
        }
        else{
        str+=s.substr(i*k,k).split('').reverse().join("")}
    }
    return str
};

//beats 83%    循环遍历，，奇数k个倒叙，偶数k个正常排序