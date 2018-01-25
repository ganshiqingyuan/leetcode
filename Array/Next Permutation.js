//https://leetcode.com/problems/next-permutation/description/
//2018 1 25
//js bird

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function reversesome(arry,key){
        var data=arry[key]
        var flag=0
        var minnum
        var min=arry[key+1]+1
        for(var i=arry.length-1;i>key;i--){
            if(arry[i]>data&&arry[i]<min){
                min=arry[i]
                flag=1
                minnum=i
            }
        }
        if(flag){
            arry[key]=arry[minnum];
            arry[minnum]=data
        }
        
        for(var i=key+flag;i<(arry.length+key+flag)/2;i++){
            console.log(arry)
            var tmp=arry[i]
            arry[i]=arry[arry.length-(i-key-flag+1)];
            arry[arry.length-(i-key-flag+1)]=tmp
            console.log(i)
        }
    }
    
    for(var i=nums.length-1;i>-1;i--){
        if(nums[i]>nums[i-1]||i==1){
            reversesome(nums,i-1)
            break
        }
    }
};
//细节比较多,,这道题差评.....逻辑不复杂..


