Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.



Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].



var letterCombinations = function(digits) {
    var arry=[0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    var resultarry=[]
    var lastarry=[]
    var attry=[]
    for(var i=0;i<digits.length;i++){
        resultarry.push(arry[digits[i]])
    }
    for(var j=0;j<resultarry.length;j++){
        attry=[]
            if(lastarry.length){
                for(var q=0;q<lastarry.length;q++){
                
                for(var z=0;z<resultarry[j].length;z++){
                attry.push(lastarry[q]+resultarry[j][z])
            }   
            }                     
 
        }
        else
            {
                 for(var z=0;z<resultarry[j].length;z++){
                attry.push(resultarry[j][z])
              }  
            }
        lastarry=attry
    }
    return lastarry
};
//88ms   beat 70%  后一个和前一个对比，，组合  

