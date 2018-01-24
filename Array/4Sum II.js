//https://leetcode.com/problems/4sum-ii/description/
//2018 1 24
//js bird

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0




/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var result=0
    var map=new Map()
    for(var i=0;i<A.length;i++){
        for(var j=0;j<B.length;j++){
            if(!map[A[i]+B[j]]){
                map[A[i]+B[j]]=1
            }
            else
                map[A[i]+B[j]]++
        }
    }
    
    for(var i=0;i<C.length;i++){
        for(var j=0;j<D.length;j++){
            if(map[-(C[i]+D[j])]){
                result+=map[-(C[i]+D[j])]
            }
        }
    }
    return result
};

//740 ms     beats 40%..  空间换时间....四层循环超时



