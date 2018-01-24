//https://leetcode.com/problems/number-of-boomerangs/description/
//2018 1 24
//js bird

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]




/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var result=0
    var map=new Map();
    for(var i=0;i<points.length;i++){
        for(var j=0;j<points.length;j++){
            if(i!=j){
           if(map.get((points[i][0]-points[j][0])*(points[i][0]-points[j][0])+(points[i][1]-points[j][1])*(points[i][1]-points[j][1]))){
               map.set((points[i][0]-points[j][0])*(points[i][0]-points[j][0])+(points[i][1]-points[j][1])*(points[i][1]-points[j][1]),map.get((points[i][0]-points[j][0])*(points[i][0]-points[j][0])+(points[i][1]-points[j][1])*(points[i][1]-points[j][1]))+1)
           }
            else
                map.set((points[i][0]-points[j][0])*(points[i][0]-points[j][0])+(points[i][1]-points[j][1])*(points[i][1]-points[j][1]),1)
        }
            }
                for(var [key,value] of map){
                
                if(value>1){
                    result+=value*(value-1)/2
                }
            }
        
        map.clear()
        
    }
    
    return result*2
};

//360 ms     beats 87%..  hashmap



