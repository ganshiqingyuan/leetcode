Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6





var findShortestSubArray = function(nums) {
    var map=new Map();
    var max=0,maxdata=[];
    for(var i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]]=1
        }
        else{
            map[nums[i]]++
        }
        if(map[nums[i]]>max){
            maxdata=[];
            maxdata.push(nums.lastIndexOf(nums[i])-nums.indexOf(nums[i])+1)
            max=Math.max(max,map[nums[i]])
        }
        if(map[nums[i]]==max){
            maxdata.push(nums.lastIndexOf(nums[i])-nums.indexOf(nums[i])+1)
        }
    }
    return Math.min.apply(Math,maxdata)
    
};
//1600多ms。。。。   

var findShortestSubArray = function(nums) {
    if (nums == null || nums.length === 0) {
        return 0;
    }
    var map=new Map();
    var max=0,maxdata=0;
    for(var i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]]=1
        }
        else{
            map[nums[i]]++
        }
        if(map[nums[i]]==max){
            maxdata.push(nums[i])
            continue
        }
        if(map[nums[i]]>max){
            maxdata=[]
            maxdata.push(nums[i])
            max=Math.max(max,map[nums[i]])
        }
    }
    var maxmax=50000;
    maxdata.forEach(data=>{
        var flag=nums.lastIndexOf(data)-nums.indexOf(data)+1
        if(flag<maxmax){
            maxmax=flag
        }
    })
    
    return maxmax
    
};
//优化一下    191ms



