//https://leetcode.com/problems/insert-interval/description/
//2018 1 29
//js bird

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].




/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length==0){
        return [newInterval]
    }
    intervals.sort(function(a,b){return a.start-b.start})
    var result=[]
    var min=newInterval.start;
    var max=newInterval.end
    if(newInterval.end<intervals[0].start){
        result.push(newInterval)
    }
    for(var i=0;i<intervals.length;i++){
        if(intervals[i].end<newInterval.start){
            result.push(intervals[i])
            if(i==intervals.length-1||intervals[i+1].start>newInterval.end){
                result.push(newInterval)
            }
        }
        else if(intervals[i].start>newInterval.end){
            result.push(intervals[i])
        }
        else{
            
            min=Math.min(intervals[i].start,min);
            max=Math.max(intervals[i].end,max)
            if(i==intervals.length-1||intervals[i+1].start>newInterval.end){
                result.push([min,max])
            }
        }
    }
    return result
};
//131 ms   beats 50%,,,,和上一题解法类似，，，，容易理解



