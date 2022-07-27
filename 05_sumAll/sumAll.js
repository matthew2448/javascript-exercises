const sumAll = function(num1, num2) {
    let sum = 0;
    if(num1 < 0 || num2 < 0) { return "ERROR";}
    if(typeof num1 == "string" || typeof num2 == "string"){ return "ERROR";}
    if(Array.isArray(num2) || Array.isArray(num2)){ return "ERROR";}
    if(num1 > num2) {let temp = num1; num1 = num2; num2 = temp;}
    for (let index = num1; index <= num2; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
