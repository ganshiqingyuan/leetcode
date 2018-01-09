Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.




var lengthOfLongestSubstring = function(s) {
    var length=[]
    var result=0
    if(s.length==1){
        return 1
    }
    for(var i=0;i<s.length;i++){
            if(length.indexOf(s[i])!=-1){
                result=Math.max(length.length,result)
                length.splice(0,length.indexOf(s[i])+1)
                length.push(s[i])
                
            }
            else{
                length.push(s[i])
            }
        }
    return Math.max(result,length.length)
};
//165ms   beat 80% good morning i want to sleep 



