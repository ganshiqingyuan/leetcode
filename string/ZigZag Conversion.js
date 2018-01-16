The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows<2){
        return s
    }
    var leng=parseInt(s.length/(2*numRows-2))+1
    var result=''
    
        for(var i=0;i<numRows;i++){
            for(var j=0;j<leng;j++){
                if(i==0||i==numRows-1){
                   result+=s[(2*numRows-2)*j+i]?s[(2*numRows-2)*j+i]:' ' 
                }
                else
                result+=s[(2*numRows-2)*j+i]?s[(2*numRows-2)*j+i]+(s[(2*numRows-2)*(j+1)+i-i*2]?s[(2*numRows-2)*(j+1)+i-i*2]:' '):' '
            }
        }
    return result.replace(new RegExp(" ","g"),'')
};
//175ms   beat 60%  思想是，，，构造n个完整的2/3个之字形，，不够的空格补足，，最后去掉空格

