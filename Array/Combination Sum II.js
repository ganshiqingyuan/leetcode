//https://leetcode.com/problems/combination-sum/description/
//2018 1 26
//js bird

Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a,b){return a-b})
    var res=[]
    
    searth(0,[],target)
    
    function searth(i,arry,target){
        if(0==target) res.push(arry.slice())
        if(i>candidates.length-1) return
        if(target<=0) return
        arry.push(candidates[i])
        searth(i+1,arry,target-candidates[i])
        arry.pop()
        while(candidates[i+1]==candidates[i]){
            i++
        }
        searth(i+1,arry,target)
    }
    
    return res
};
//回溯，，，，同上。。。。。加一层判断。。。




