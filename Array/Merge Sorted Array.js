//https://leetcode.com/problems/merge-sorted-array/description/
//2018 2 10
//js bird

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

Seen this question in a real interview before?  YesNo




/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    for(var i=0;i<nums2.length;i++){
        nums1.push(nums2[i])
    }
    nums1.sort(function(a,b){return a-b})
};
//、没啥算法，，水题
