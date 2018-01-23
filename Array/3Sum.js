Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]





var threeSum = function(nums) {
    var result=[]
    nums=nums.sort(function(a,b){
          if (a>b) {
              return 1;
          }else if(a<b){
              return -1
          }else{
            return 0;
         }
     })
    
    for(var i=0;i<nums.length-2;i++){
        if(i==0||nums[i-1]!=nums[i]){
            var sum=0-nums[i]
            var left=i+1,right=nums.length-1
            
            while(left<right){
                if(nums[left]+nums[right]==sum){
                    result.push([nums[i],nums[left],nums[right]]);
                    while(left<right&&nums[left]==nums[++left]){
                        
                    }
                    while(left<right&&nums[right]==nums[--right]){
                        
                    }
                    
                }
                else if(nums[left]+nums[right]<sum)
                    left++
                else 
                    right--
            }
        }
    }
    
    return result
};
//307 ms   O(n^)



