Write a function to find the longest common prefix string amongst an array of strings.


var longestCommonPrefix = function(strs) {
    console.log(strs)
    if(strs==''){
        return ''
    }
    if(strs.length==1){
        return strs.toString()
    }
    var results=''
    for(var i=0;i<strs[0].length;i++){
        for(var j=0;j<strs.length;j++){
            if(strs[j][i]!=strs[0][i]){
                return results
            }
        }
        results+=strs[0][i]
    }
    return results
};

//98ms  每次提交时间都不一样。。。。，，beats 50%  O(n^)



//java 的漂亮解法
public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0) return "";
    String prefix = strs[0];
    for (int i = 1; i < strs.length; i++)
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) return "";
        }        
    return prefix;
}


//一个for循环，，O(n)
