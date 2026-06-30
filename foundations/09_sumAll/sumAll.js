const sumAll = function(num1, num2) {
    if ((num1<0 || num2<0) 
        || (isNaN(num1) || isNaN(num2))
        || (!Number.isInteger(num1) || !Number.isInteger(num2))
    ) 
    return "ERROR";

    let max = num1, min = num2;
    if(num1 < num2){
        max = num2;
        min = num1;
    }

    let sum = 0;

    for(let i=min; i<=max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
