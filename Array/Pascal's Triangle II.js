Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?





var getRow = function(numRows) {
    if(numRows==0){
        return [1]
    }
    numRows++
    var result=new Array(numRows);
    for(var i=0;i<numRows;i++){
        result[i]=[]
    }
    result[0][0]=1;
    for(var i=1;i<numRows;i++){
        result[i].push(1)
        for(var j=0;j<result[i-1].length;j++){
            
            if(result[i-1][j+1]){
                result[i].push(result[i-1][j]+result[i-1][j+1])
            }
            
        }
        result[i].push(1)
    }
    return result[numRows-1]

};
//90ms   



