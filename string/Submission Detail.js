var judgeCircle = function(moves) {
    var U=moves.match(new RegExp("U","g"))?moves.match(new RegExp("U","g")).length:0;
    var D=moves.match(new RegExp("D","g"))?moves.match(new RegExp("D","g")).length:0;
    var L=moves.match(new RegExp("L","g"))?moves.match(new RegExp("L","g")).length:0;
    var R=moves.match(new RegExp("R","g"))?moves.match(new RegExp("R","g")).length:0;
   if(U==D&&L==R){
       return true
   }
    else
        return false
};

//字符串正则匹配上下左右数量，， beat 5.34%..........。。


var judgeCircle = function(moves) {
    var left=0,right=0,top=0,down=0
   for(var i=0;i<moves.length;i++){
       if(moves[i]=='U'){
        top++
       }
       else if(moves[i]=='D'){
        down++
       }
       else if(moves[i]=='L'){
        left++
       }
       else if(moves[i]=='R'){
        right++
       }
   }
    if(left==right&&top==down){
        return true
    }
    else return false
};

//基本for循环，，beat 55.6%。。。。。。。