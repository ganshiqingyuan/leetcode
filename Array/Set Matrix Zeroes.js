//https://leetcode.com/problems/set-matrix-zeroes/description/
//2018 1 31
//js bird

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.





/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var heng=[];
    var shu=[];
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
               heng.push(i)
                shu.push(j)
            }
        }
    }
    
    for(var i=0;i<matrix.length;i++){
        if(heng.indexOf(i)!=-1){
            for(var j=0;j<matrix[i].length;j++){
                matrix[i][j]=0
            }
        }
    }
    for(var i=0;i<matrix[0].length;i++){
        if(shu.indexOf(i)!=-1){
            for(var j=0;j<matrix.length;j++){
                matrix[j][i]=0
            }
        }
    }
    
};
//所有需要改变的行列存入数组   beats 100%

