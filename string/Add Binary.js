Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".


var addBinary = function(a, b) {
    if(a.length>b.length){
        var long=a.split('');
        var short=b.split('')
    }
    else{
        var long=b.split('');
        var short=a.split('')
    }
    
    for(var i=0;i<short.length;i++){
        long[long.length-1-i]=parseInt(long[long.length-1-i])+parseInt(short[short.length-1-i])
    }
    
    var addflag=0
    for(var i=long.length-1;i>-1;i--){
        if(addflag){
            long[i]=parseInt(long[i])+1
            addflag=0
        }
        if(long[i]>1){
            long[i]=long[i]-2
            addflag=1
        }
    }
    if(addflag){
        return '1'+long.join('')
    }
    else
        return long.join('')
};


//98ms  每次提交时间都不一样。。。。，，beats 87%  最高



//java 的漂亮解法
class Solution
{
public:
    string addBinary(string a, string b)
    {
        string s = "";
        
        int c = 0, i = a.size() - 1, j = b.size() - 1;
        while(i >= 0 || j >= 0 || c == 1)
        {
            c += i >= 0 ? a[i --] - '0' : 0;
            c += j >= 0 ? b[j --] - '0' : 0;
            s = char(c % 2 + '0') + s;
            c /= 2;
        }
        
        return s;
    }
};