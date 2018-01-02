Example 1:
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
Example 2:
Input:
["a"]

Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Explanation:
Nothing is replaced.
Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.


var compress = function(chars) {
    var length=0;
     var   total=1;
    for(var i=0;i<chars.length;i++){
        if(chars[i+1]!=chars[i]){
            chars[length++]=chars[i]
            if(total>1){
            for(var j=0;j<total.toString().length;j++){
                chars[length++]=total.toString()[j]
            }
            }
            total=1
            
        }
        else{
            total++
        }
    }
   
    return length
};


//题意晦涩难懂。。。。。思想还是没有错的，，beats 50%