Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.



 function check(s1,s2,arr){
        if(arr==''){
            if(s1==''&&s2==''){
                return true
            }
            else
                return false
        }
        else if(arr[0]==s1[0]&&arr[0]==s2[0]){
            return check(s1.substr(1),s2,arr.substr(1))||check(s1,s2.substr(1),arr.substr(1))
        }
        else if(arr[0]==s1[0]){
            return check(s1.substr(1),s2,arr.substr(1))
        }
        else if(arr[0]==s2[0]){
            return check(s1,s2.substr(1),arr.substr(1))
        }
        return false
    }
    
    return check(s1,s2,s3)

//超时。。。。。。。递归

var isInterleave = function(s1, s2, s3) {
    if(s3==''){
        if(s1!=''||s2!=''){
            return false
        }
        else
            return true
    }
    
    if(s3.length!=s1.length+s2.length){
        return false
    }

    var arry=new Array(s1.length+1)
    
        for(var i=0;i<arry.length;i++){
            arry[i]=new Array(s2.length+1);
        }
        
    for(var i=0;i<s1.length+1;i++){
        for(var j=0;j<s2.length+1;j++){
            if(i==0&&j==0)
               arry[0][0]=true 
            else if(i==0)
            arry[0][j]=(s2.substr(0,j)==s3.substr(0,j))
            else if(j==0)
            arry[i][0]=(s1.substr(0,i)==s3.substr(0,i))
            else{
                
                arry[i][j]=(arry[i-1][j] && s1[i-1]==s3[i+j-1])||(arry[i][j-1] && s2[j-1]==s3[i+j-1]);
                
            }
            
            
            
        }
    }
    return arry[s1.length][s2.length]
    
   
};
//数据存数组里，，边界值搞蒙了



