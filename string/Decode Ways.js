A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.

var numDecodings = function(s) {
    if(s==''||s[0]==0){
        return 0
    }
    
    
   var arry=new Array(s.length);
    if(s[1]==0&&s[0]>2){
        return 0
    }
    if(s[0]>2){
        arry[0]=1;
        arry[1]=1;
    }
    else if(s.substr(0,2)<27&&s[1]!=0){
        arry[0]=1;
        arry[1]=2;
    }
    else{
        arry[0]=1;
        arry[1]=1;
    }

   for(var i=2;i<s.length;i++){
       if(s[i]==0&&(s[i-1]>2||s[i-1]==0)){
           return 0
       }
       if(parseInt(s[i-1]+s[i])<27&&s[i]!=0&&s[i-1]!=0){
           arry[i]=arry[i-1]+arry[i-2]
       }
       else if(s[i]==0){
           arry[i]=arry[i-2]
       }
       else{
           arry[i]=arry[i-1]
       }
   }
    
    
    return arry[s.length-1]
};

//动态规划  90ms beats 90%  首先构造最优子结构，，，代码简单易懂。。。。然后关系式，，s[i]=s[i-1]+s[i-2]或s[i]=s[i-1]或者直接不符合条件返回0



