//https://leetcode.com/problems/search-a-2d-matrix/description/
//2018 2 2
//js bird

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]




/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix==''){
        return false
    }
    if(target<matrix[0][0]){
        return false
    }
    var arry
    for(var i=0;i<matrix.length;i++){
        if(matrix[i][0]-1<target&&target-1<matrix[i][matrix[0].length-1]){
            arry=matrix[i]
            break
        }
    }
    if(!Array.isArray(arry)){
        return false
    }
    var left=0,right=arry.length-1;
    while(left<=right){
        if(arry[left]==target){
            return true
        }
        else if(arry[right]==target){
            return true
        }
        else
            left++
        right--
    }
    return false
};
//先找到在哪个一级数组，，，在通过指针两端寻找 beats 50%

