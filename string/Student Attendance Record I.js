

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False





var checkRecord = function(s) {
    return ! ((s.match(/A/g)?s.match(/A/g).length:0)>1||s.match(/LLL/g))
};

//beats 78%   