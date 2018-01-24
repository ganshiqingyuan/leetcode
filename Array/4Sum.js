Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]




var fourSum = function(nums, target) {
    nums.sort(function(a,b){return a-b})
    var result=[]
    for(var i=0;i<nums.length-3;i++){
        
        if(i==0||nums[i-1]!=nums[i]){
            
            for(var j=i+1;j<nums.length-2;j++){
                
                if(j==i+1||nums[j-1]!=nums[j]){
                    
                    var left=j+1,right=nums.length-1,sum=target-(nums[i]+nums[j]);
                    while(left<right){
                        
                        if(nums[left]+nums[right]==sum){
                            result.push([nums[i],nums[j],nums[left],nums[right]])
                            
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
        }
    }
    return result
};

//141 ms     beats 100%..  和3sum类似



