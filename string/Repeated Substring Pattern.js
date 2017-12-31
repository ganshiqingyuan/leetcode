var repeatedSubstringPattern = function(s) {
    if(s.length<2){
        return false
    }
    if(s.match(new RegExp(s[0],'g')).length==s.length){
        return true
    }
    if(s.length/2==parseInt(s.length/2)){
        if(s.substring(0,s.length/2)==s.substr(s.length/2)||s.substring(0,s.length/3)==s.substr(s.length/3,s.length/3)&&s.substring(0,s.length/3)==s.substr(s.length*2/3)){
            return true
        }
    }
    else{
        if(s.substring(0,s.length/3)==s.substr(s.length/3,s.length/3)&&s.substring(0,s.length/3)==s.substr(s.length*2/3)){
            return true
        }
    }
    return false
};

//容易理解，，，121秒执行完，，，查看最多的解法至今没看懂咋回事