Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result=[]
    function validstr(str){
        if(str.match(new RegExp('\\)',"g"))&&str.match(new RegExp('\\)',"g")).length>str.match(new RegExp('\\(',"g")).length||str.match(new RegExp('\\(',"g")).length>n){
            return false
        }
        return true
    }
    
    var checkstr=function(str){
        if(validstr(str)){
            if(str.length==2*n){
            result.push(str)
            }
            else{
                checkstr(str+'(');
                checkstr(str+')')
            }
        }
    }
    checkstr('(')
    return result
};
//160ms   beat 10%  递归

