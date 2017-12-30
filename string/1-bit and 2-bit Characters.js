var isOneBitCharacter = function(bits) {
    var i=0
    while(i<bits.length-1){
        if(bits[i]==0){
            i++
        }
        else {
            i+=2
        }
    }
    return i==bits.length-1
};

//最后一个总为0 