Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".


var minWindow = function(s, t) {
    var leng=t.length;
    var start=0,end=0,head=0;
    var result=s.length+1;
    var map=new Map();
    
    for(var i=0;i<s.length;i++){
        map[s[i]]=0
    }
    
    for(var i=0;i<t.length;i++){
        if(!map[t[i]])
        map[t[i]]=1
        else
           map[t[i]]++ 
    }
    while(end<s.length){
        if(map[s[end++]]-->0){
            leng--
        }
        while(leng==0){
            if(end-start<result){
                result=end-(head=start)
            }
            if(map[s[start++]]++ ==0){
                leng++
            }
        }
    }
    
    return result==s.length+1?"":s.substr(head,result)
};

//感谢大神的魔板，，，，神了这答案，，，beats90%，，自己按照思路写的



