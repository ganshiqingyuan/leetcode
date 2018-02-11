//https://leetcode.com/problems/largest-rectangle-in-histogram/description/
//2018 2 10
//js bird

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.



/**
 * @param {character[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function(height) {
    if (height.length === 0) return 0;
    var stack = [];
    var max = 0;
    for (var i = 0; i <= height.length; i++) {
        var cur =  (i === height.length) ? -1 : height[i];
        while (stack.length !== 0 && cur < height[stack[stack.length-1]]) {
            var index = stack.pop();
            var h = height[index];
            var w = stack.length === 0 ? i : i - stack[stack.length-1]-1;
            max = Math.max(max, h*w);
        }
        stack.push(i);
    }
    return max;
};
//栈的方法  



/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights==null){
        return 0
    }
    var maxheight=0
    var arry=new Array(heights.length)
    var max=0
    for(var i=0;i<heights.length;i++){
        if(i>0&&heights[i]<heights[i-1]){
            max=Math.max(getmax(i-1),max)
        }
      
    }
    
    function getmax(index){
        var inmax=0,left=1,minheight=Number.MAX_VALUE;
        while(index>-1){
            minheight=Math.min(minheight,heights[index])
            if(left*minheight>inmax){
                inmax=left*minheight
                maxheight=minheight
            }
            index--;
            left++
        }
        return inmax
    }
    return max
    
};
//递归，，，，超时


var largestRectangleArea = function(height) {
    if (height.length === 0) return 0;
    var stack = [];
    var max = 0;
    for (var i = 0; i <= height.length; i++) {
        var cur =  (i === height.length) ? -1 : height[i];
        while (stack.length !== 0 && cur < height[stack[stack.length-1]]) {
            var index = stack.pop();
            var h = height[index];
            var w = stack.length === 0 ? i : i - stack[stack.length-1]-1;
            max = Math.max(max, h*w);
        }
        stack.push(i);
    }
    return max;
};
//、beautiful  solution 
