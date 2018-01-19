Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

a) Insert a character
b) Delete a character
c) Replace a character


var minDistance = function(word1, word2) {
    var len1=word1.length;
    var len2=word2.length;
    
    if(len1==0) return len2
    if(len2==0) return len1
    
    
    var dp=new Array(len1+1)
    for(var i=0;i<len1+1;i++){
        dp[i]=new Array(len2+1)
    }
    
    for(var i=0;i<len1+1;i++){
        dp[i][0]=i
    }
    for(var i=0;i<len2+1;i++){
        dp[0][i]=i
    }
    
    function dps(index1,index2){
        if(word1[index1]==word2[index2]){
            dp[index1+1][index2+1]=dp[index1][index2]
        }
        else{
            dp[index1+1][index2+1]=Math.min(dp[index1][index2+1]+1,dp[index1+1][index2]+1,dp[index1][index2]+1)
        }
    }
           
           for(var i=0;i<len1;i++){
            for(var j=0;j<len2;j++){
                if(!dp[i+1][j+1])
                dps(i,j)
            }
        }
    
    return dp[len1][len2]
};

//beats 30%  动态规划      又是动态规划最讨厌动态规划



