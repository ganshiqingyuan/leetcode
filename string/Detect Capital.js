

Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False





var detectCapitalUse = function(word) {
    function judgeSame(word,type){
        if(type=='big'){
            for(var i=0;i<word.length;i++){
                if(word[i].toUpperCase()!=word[i]){
                return false
            }
            }
        }
        else if(type=='small'){
            for(var i=0;i<word.length;i++){
                if(word[i].toLowerCase()!=word[i]){
                return false
            }
            }
        }
        return true
    }
    
    if(word.length<2){
        return true
    }
    else if(word.charAt(0).toLowerCase()==word.charAt(0)){
           return judgeSame(word,'small')
       }
    else if(word.charAt(0).toUpperCase()==word.charAt(0)&&word.charAt(1).toUpperCase()==word.charAt(1)){
           return judgeSame(word,'big')
    }
    else{
       return judgeSame(word.slice(1),'small')
    }
};

//beats 60%    三种情况 逐一判断简单易懂




var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();                                   
};


//1行代码。。。。。。。同样beat60%