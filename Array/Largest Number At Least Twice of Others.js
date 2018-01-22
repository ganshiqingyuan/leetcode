In a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
Example 2:
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
Note:


var dominantIndex = function(nums) {
    if(nums.length==1){
        return 0
    }
    var a=Math.max.apply(Math,nums);
    var aindex=nums.indexOf(a)
    nums.splice(aindex,1);
    return a>=2*Math.max.apply(Math,nums)?aindex:-1
};

//100ms   

var dominantIndex = function(nums) {
    if(nums.length==1){
        return 0
    }
    var a=nums.concat()
    a.sort(function compare(value1,value2){
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
 
                return 1;
            }else{
  
                return 0;
            }
        });
    return a[a.length-1]>=a[a.length-2]*2?nums.indexOf(a[a.length-1]):-1
};
//118ms

var dominantIndex = function(nums) {
     var  maxOne = 0, maxTwo = 0, idx = 0;
   for(var i=0; i<nums.length; i++){
       if(maxOne < nums[i]){
          maxTwo = maxOne;
          maxOne = nums[i];
          idx = i;
       } 
       else if(maxTwo < nums[i]){
          maxTwo = nums[i];
      }
   }
   return (maxOne>=maxTwo*2) ? idx : -1;
};
//95ms



