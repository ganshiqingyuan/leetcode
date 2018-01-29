//https://leetcode.com/problems/merge-intervals/description/
//2018 1 29
//js bird

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].




/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length==0||intervals.length==1){
        return intervals
    }
    
    
    
    
    
    intervals.sort(function(a,b){return a.start-b.start})
    var begin=99999999
    var result=[]
    var reach=0
    for(var i=0;i<intervals.length;i++){
        begin=Math.min(intervals[i].start,begin)
        reach=Math.max(intervals[i].end,reach)
        if(i<intervals.length-1&&reach>=intervals[i+1].start){
            
        }
        else{
            result.push([begin,reach])
            begin=99999999
            reach=0
        }
    }
    return result
};

//143 ms   beats 50%,,,,捡起了我的信心，，，，，，终于没看答案了



