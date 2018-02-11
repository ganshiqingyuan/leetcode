//https://leetcode.com/problems/maximal-rectangle/description/
//2018 2 10
//js bird

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 6.




/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix==null){
        return 0
    }
    
    var areaarry=new Array(matrix.length).fill(typeof(matrix[0])=='object'?(new Array(matrix[0].length)):0)
    function checkindex(i,j){
        var top=1,left=1,ii=i,jj=j;;
        var min=areaarry[i][j]
        var maxarea=min

        while(j&&matrix[i][--j]==1&&matrix[i][j]==1){
            top++
            min=Math.min(min,areaarry[i][j])
            maxarea=Math.max(maxarea,top*min)
            
        }

        return maxarea
    }
    function checkheight(i,j){
        if(matrix[i][j]==0){
            return 0
        }
        var height=1
         while(i&&matrix[i-1][j]==1){
            height++;
            i--
        }
        return height
    }
    
    var max=0;
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[i].length;j++){
            areaarry[i][j]=matrix[i][j]==1?((i>0?areaarry[i-1][j]:0)+1):0
            max=Math.max(checkindex(i,j),max)
        }
    }
    return max
    
};
//dp  数组存储每个点的高度

