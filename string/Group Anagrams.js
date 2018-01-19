Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]


var groupAnagrams = function(strs) {
    function match1(item1,item2){
        if(item1.length!=item2.length){
            return false
        }
        for(var i=0;i<item1.length;i++){
            if(item2.indexOf(item1[i])==-1){
                return false
            }
            else
                item2=item2.replace(new RegExp(item1[i]),"$")
        }
        
        return true
    }
    
    var result=[[strs[0]]]
    
    for(var i=1;i<strs.length;i++){
        var flag=1
        for(var j=0;j<result.length;j++){
            if(match1(strs[i],result[j][0])){
                result[j].push(strs[i]);
                flag=0
                break
            }
        }
        if(flag){
            result.push([strs[i]])
        }
    }
    return result
};
//3600ms ....也不知道怎么ac的。。。。。。没用sort字符串数组



var groupAnagrams = function(strs) {
  let len = strs.length, map = {}, sortStr = '';
  for(let i = 0; i < len; i++) {
    sortStr = strs[i].split('').sort().join('');
    if(!map[sortStr])  map[sortStr] = [];
    map[sortStr].push(strs[i])
  }
  return Object.values(map);
};

//260ms   hashmap 别人写的




