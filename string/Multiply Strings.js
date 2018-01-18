Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.



var multiply = function(num1, num2) {
    var len1=num1.length;
    var len2=num2.length;
    var arry=new Array(len1+len2)
    for(var q=0;q<arry.length;q++){
        arry[q]=0
    }
    for(var i=len1-1;i>-1;i--){
        for(var j=len2-1;j>-1;j--){
            var data=parseInt(num1[i])*parseInt(num2[j])
            var index=i+j;
            var index2=i+j+1
            var real=data+arry[index2]
            arry[index]+=parseInt(real/10)
            arry[index2]=real%10
        }
    }
    console.log(arry)
    if(parseInt(num1)==0||parseInt(num2)==0){
        return '0'
    }
    
    var str=''
    for(var i=0;i<arry.length;i++){
        str+=arry[i]
    }
    return str[0]==0?str.substr(1):str
};
//95ms ac    beat60 %.....   只能精确到十一位。。。。。parseInt  乘法等等，，




