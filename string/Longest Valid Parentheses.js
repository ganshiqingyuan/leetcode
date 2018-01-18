Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.



var longestValidParentheses = function(s) {
    
        var result=0
        var realresult=0
        var stack=[];
         stack.push(-1)
        for(var i=0;i<s.length;i++){
            if(s[i]=='('){
                stack.push(i)
                        
            }
            else{
                
                   stack.pop()
                if(stack.length!=0){
                    result=i-stack[stack.length-1]
                realresult=Math.max(realresult,result)
                }
                else
                    stack.push(i)
                    
                }
            
        }
    return realresult
};
//100ms ac    beat80 %.....   hard难度，，果然只要是匹配这种，，直接考虑用栈把，，肌肉记忆




