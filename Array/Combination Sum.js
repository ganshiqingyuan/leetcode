//https://leetcode.com/problems/combination-sum/description/
//2018 1 26
//js bird

Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]


var combinationSum = function(candidates, target) {

  candidates.sort((a, b) => a - b);

  var length = candidates.length;
  var res = [];
  search(0, [], target);
  return res;

  function search(idx, prefix, target) {
    if (target === 0) res.push(prefix.slice());
    if (idx === length) return;
    if (target <= 0) return;

    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx]);
    prefix.pop();
    search(idx + 1, prefix, target);
  }
    

};
//回溯，，，，




