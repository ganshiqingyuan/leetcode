var validPalindrome = function(s) {
    if(s.split('').join('')==s.split('').reverse().join('')){
            return true
        }
    var allflag1=true
    var flag=0
    for(var i=0;i<s.length/2;i++){
        
       if(s[i]!=s.substr(s.length-i-flag-1,1)){
           if(!flag){
               flag=1
               if(s[i]!=s.substr(s.length-i-1-1,1)){
                   allflag1=false
               }
           }
           else
               allflag1=false
       }
    }
    
    var allflag2=true
    var flag2=0
     for(var i=0;i<s.length/2;i++){
        
       if(s[i+flag2]!=s.substr(s.length-i-1,1)){
           if(!flag2){
               flag2=1
               if(s[i+1]!=s.substr(s.length-i-1,1)){
                   allflag2=false
               }
           }
           else
               allflag2=false
       }
    }
    
    if(allflag1 || allflag2){
        return true
    }
    else
        return false

};

//超时几次后，，，，这种方法勉强不超时，，，，，，完事看了下答案，，思路一样，，但是他们比较快。。。