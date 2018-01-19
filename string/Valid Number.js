Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true





var isNumber = function(s) {
    if(s==' '){
        return false
    }
    return isNaN(Number(s))?false:true
};

//beats 70%  这个。。。。。对js来说好实现，，，难道这是要写js Number函数实现方法，，，，，我还是直接用把



