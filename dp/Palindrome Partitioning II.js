https://leetcode.com/problems/palindrome-partitioning-ii/description/
//2018 3 12
//js bird

Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.




/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    var length=s.length
    var isp=new Array(length)
    for(var i=0;i<isp.length;i++){
        isp[i]=new Array(length)
    }
    

    function searth(m,n){
        
        var length=m-n+1
        var min=length
        var now=m
        if(isp[m][n]){
            return 0
        }
        while(length>1){
              if(isp[m-1][n]){
                min=Math.min(dp[m-1][n]+dp[now][m]+1,min)
        }
            length--
            m--
        }
        return min
    }
    var dp=new Array(length)
    for(var i=0;i<isp.length;i++){
        dp[i]=new Array(length)
    }
    for(var i=0;i<length;i++){
        for(var j=i;j>-1;j--){
            isp[i][j]=(i==j||(s[i]==s[j]&&((i-j)<3||isp[i-1][j+1])))?true:false
            dp[i][j]=searth(i,j)
        }
    }
    return dp[length-1][0]
};
//尝试了几种办法都超时，O（n）3 

var minCut = function(s) {
    var len = s.length;
        var dp = new Array(len);
        var p=new Array(len+1);
        for(var i=0;i<p.length;i++){
            p[i]=new Array(len+1)
        }
        for (var i = 1; i <= len; i++) {
            dp[i] = i;
            for (var j = 1; j <= i; j++) {
                if (s.charAt(i-1) == s.charAt(j-1)) {
                    if (i - j < 2 || p[j+1][i-1]) {
                        p[j][i] = true;
                        if (j==1) dp[i] = 0;
                        else {
                            dp[i] = Math.min(dp[i], dp[j-1]+1);
                        }
                    }
                }
            }
        }
        return dp[len];
};
//大神的解决方案，O(n)2,,略难想
