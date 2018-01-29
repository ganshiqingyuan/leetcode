//https://leetcode.com/problems/unique-paths/description/
//2018 1 29
//js bird

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?




/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var arry=new Array(n).fill(1)
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            arry[j]+=arry[j-1]
        }
    }
    return arry[n-1]
};
//dp   并进行空间优化版



