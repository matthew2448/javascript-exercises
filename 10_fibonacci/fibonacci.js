const fibonacci = function(num) {
    if(num <= 0) {return "OOPS";}
    if(typeof stringValue == "string"){
        num = parseInt(num);
    }
    let index = 2; let fib = 1; let nextFib = 1;

    while(index < num){
        let temp = nextFib;
        nextFib = fib + nextFib;
        fib = temp;
        index++;
    }

    return nextFib;
};

// Do not edit below this line
module.exports = fibonacci;
