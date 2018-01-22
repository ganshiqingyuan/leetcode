Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]



var generate = function(numRows) {
    if(numRows==0){
        return []
    }
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
    return result
};
//85ms



