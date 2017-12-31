var countBinarySubstrings = function(s) {
    var total=0
    var num=1
    var pusher=[]
    for(var i=0;i<s.length;i++){
        if(s[i]!=s[i+1]){
            pusher.push(num)
            num=1
        }
        else
            num++
    }

    for(var i=0;i<pusher.length-1;i++){
        total+=Math.min(pusher[i],pusher[i+1])
    }
    return total
};

//试了两种解法都超时了。。。。。。。。无奈看的答案，，，，，字符串问题要找规律，，不能蛮干。。。