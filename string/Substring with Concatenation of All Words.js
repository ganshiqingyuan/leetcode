You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
/**
 * @param {number} n
 * @return {string[]}
 */
var findSubstring = function(s, words) {
    var lastarry=[]
    var resultarry=[]
    var resultwords=[]
    for(var i=0;i<words.length;i++){
        resultarry=[]
        if(lastarry.length){
            for(var j=0;j<lastarry.length;j++){
                for(var z=0;z<words.length;z++){
                    if(lastarry[j].indexOf(z.toString())==-1){
                        resultarry.push(lastarry[j].toString()+z.toString())
                    }
                }
            }
        }
        else{
            for(var l=0;l<words.length;l++){
               resultarry.push(l.toString()) 
            }
            
        }
        lastarry=resultarry
    }
    function checkindex(arr,index){
        var index11=s.indexOf(arr,index)
        if(index11!=-1&&resultwords.indexOf(index11)==-1){
             resultwords.push(index11)
            checkindex(arr,s.indexOf(arr,index)+1)
        }
        
    }

    for(var k=0;k<resultarry.length;k++){
        for(var z=0;z<words.length;z++){
            resultarry[k]=resultarry[k].replace(new RegExp(z,'g'),words[z])
        }
    }
    for(var d=0;d<resultarry.length;d++){
        checkindex(resultarry[d],0)
    }
    return resultwords
};
//超时，，，，，，数据太长就超时了


var findSubstring = function(s, words) {
    var result=[]
    var newlength=words.length
    var leng=words[0].length
    for(var i=0;i<(s.length-newlength*leng+1);i++){
        var test=words.concat()
        for(var j=0;j<newlength;j++){
           var index11=test.indexOf(s.substr(i+j*leng,leng))
            if(index11!=-1){
 
                test.splice(index11,1)
              
            }
            else 
                break

                
        }
        if(test.length==0){
            result.push(i)
        }
    }
    return result
};

//700ms ac    beat12%.....好像就十几个ac的 js代码


//花了我大量时间，，为什么没看答案，，因为没答案，，为什么没看别人的，，因为没有js的提交，，为什么没看别的语言，，因为看不懂。。。

