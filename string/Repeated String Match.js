var repeatedStringMatch = function(A, B) {
    var C=A;
    for(var i=0;i<B.length/C.length+2;i++){
        if(A.match(new RegExp(B))){
            return i+1
        }
        else
            A+=C
    }
    return -1
};

//第一个accept  beat 3.9%..........没看懂别的什么好办法。。。。。