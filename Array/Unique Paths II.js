//https://leetcode.com/problems/unique-paths-ii/description/
//2018 1 29
//js bird

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.



/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]==1){
return 0}
    var len=obstacleGrid.length
    var hei=obstacleGrid[0].length
    for(var i=0;i<len;i++){
        for(var j=0;j<hei;j++){
            if(i==0&&j==0){
                obstacleGrid[0][0]=1
            }
            else if(i==0){
                 obstacleGrid[i][j]=obstacleGrid[i][j-1]?(obstacleGrid[i][j]==0?1:0):0
            }
            else if(j==0){
                obstacleGrid[i][j]=obstacleGrid[i-1][j]?(obstacleGrid[i][j]==0?1:0):0
            }
            else {
                obstacleGrid[i][j]=obstacleGrid[i][j]==0?obstacleGrid[i-1][j]+obstacleGrid[i][j-1]:0
            }
        }
    }
    return obstacleGrid[len-1][hei-1]
};
//dp 同上，，加了一层判断而已   不稳定的O（1）额外空间



