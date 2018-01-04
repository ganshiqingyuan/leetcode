Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
Example 1:
Input: ["23:59","00:00"]
Output: 1


var findMinDifference = function(timePoints) {
    var result=1400
    var pre=-1
    var max=0
    var min=1399
    var all=new Array(1440)
    for(var i=0;i<timePoints.length;i++){   
        var time=parseInt(timePoints[i].split(":")[0])*60+parseInt(timePoints[i].split(":")[1])
        if(!all[time]){
            all[time]=true
        }   
        else{
            return 0
        }
    }
    
    for(var j=0;j<all.length;j++){
        if(all[j]){
            if(pre!=-1){
            result=Math.min(result,j-pre,1440-j+pre)
                }
            pre=j;
            max=Math.max(max,j)
             min=Math.min(min,j)
        }
    }
    
    return Math.min(result,1440-max+min)
    
};
//99ms  。。。。，，beats 92%  直接循环判断的超时了。。。。。。循环判断1440个数，，，，，看的答案，，，，没认真思考。。。。。。



