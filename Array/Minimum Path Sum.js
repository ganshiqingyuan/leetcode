//https://leetcode.com/problems/minimum-path-sum/description/
//2018 1 29
//js bird

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:
[[1,3,1],
 [1,5,1],
 [4,2,1]]
Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.



/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid==null){
        return 0
    }
    for(var i=0;i<grid.length;i++){
        grid[i][0]=grid[i][0]+(grid[i-1]?grid[i-1][0]:0)
        for(var j=1;j<grid[0].length;j++){
            if(i==0){
                grid[0][j]=grid[0][j]+(grid[0][j-1]?grid[0][j-1]:0)
            }
            else
            grid[i][j]=Math.min(grid[i-1][j],grid[i][j-1])+grid[i][j]
        }
    }

    return grid[grid.length-1][grid[0].length-1]
};
//dp ..二维数组存储重复计算....



