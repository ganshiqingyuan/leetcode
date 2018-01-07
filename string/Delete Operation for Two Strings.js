Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".


var minDistance = function(word1, word2) {
        var dp = new Array(word2.length + 1);
        for (var i = 0; i <= word1.length; i++) {
            var temp=new Array(word2.length+1);
            for (var j = 0; j <= word2.length; j++) {
                if (i == 0 || j == 0)
                    temp[j] = i + j;
                else if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    temp[j] = dp[j - 1];
                else
                    temp[j] = 1 + Math.min(dp[j], temp[j - 1]);
            }
            dp=temp;
        }
        return dp[word2.length];
    

};
//99ms  。。。。，，beats 62%  dps  动态规划，，温习了一遍动态规划



