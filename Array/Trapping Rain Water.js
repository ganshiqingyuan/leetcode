//https://leetcode.com/problems/trapping-rain-water/description/
//2018 1 27
//js bird

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!



/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var result=0
    var left=new Array(height.length).fill([]);
    var right=new Array(height.length).fill([]);
    
    left[0]=height[0]
    for(var i=1;i<height.length;i++){
        left[i]=Math.max(height[i],left[i-1])
    }
    
    right[height.length-1]=height[height.length-1]
    
    for(var i=height.length-2;i>-1;i--){
        right[i]=Math.max(height[i],right[i+1])
    }
    
    for(var i=0;i<height.length;i++){
        result+=Math.min(left[i],right[i])-height[i]
    }
    
    return result
};
//  O(n)



