Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


var isValid = function(s) {
    var result=[]
    for(var i=0;i<s.length;i++){
        
        switch(s[i]){
            case '(' : result.push(s[i]); break;
            case '[' : result.push(s[i]); break;
            case '{' : result.push(s[i]); break;
            case ')' : if(result[result.length-1]!='('||result.length==0){return false} else{result.pop()} break;
            case ']' : if(result[result.length-1]!='['||result.length==0){return false} else{result.pop()} break;
            case '}' : if(result[result.length-1]!='{'||result.length==0){return false} else{result.pop()} break;
            default: break;
        }
    }
        
            
            
    
    
    return result.length==0
 
};
//70ms  。。。。，，beats 80%  优雅的写法，，主要使用栈来存储，，，js没有栈直接用array代替了



