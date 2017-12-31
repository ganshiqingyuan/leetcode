var firstUniqChar = function(s) {
    if(!s){return -1}
    for(var i=0;i<s.length;i++){
        if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
            return i
        }
    }
    return -1
};

//分分钟搞定，，，正序出现和倒叙出现是不是一样，，，速度不慢