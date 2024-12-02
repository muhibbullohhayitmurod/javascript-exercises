const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
   
    if (start > end){
        const temp = start;
        start = end;
        end = temp;
    }

    while(start <= end){
        sum += start;
        if(isNaN(sum)){
            return "ERROR";
        }
        start++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
