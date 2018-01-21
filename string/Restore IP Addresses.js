Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)



var restoreIpAddresses = function(s) {
    function isvalid(s1,s2,s3,s4){
        var arry=[s1,s2,s3,s4]
        
       var first= arry.every(data=>{
            if(parseInt(data).toString()==data&&parseInt(data)<256){
                return true
            }
           return false
        })
       
       return first&&(s1.length+s2.length+s3.length+s4.length)==s.length
    }
    
    var result=[]
    
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            for(var k=0;k<3;k++){
                for(var l=0;l<3;l++){
                    if(l<(s.length-(i+k+j+3))){
                    if(isvalid(s.substr(0,i+1),s.substr(i+1,j+1),s.substr(i+j+2,k+1),s.substr(i+j+k+3,l+1))){
                        result.push(s.substr(0,i+1)+'.'+s.substr(i+1,j+1)+'.'+s.substr(i+j+2,k+1)+'.'+s.substr(i+j+k+3,l+1))
                    }
                        }
                }
            }
        }
    }
    return result
};

//循环判断是否是符合ip条件   



