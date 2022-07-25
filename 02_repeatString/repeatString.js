const repeatString = function(phrase, amount) {
    if(amount < 0){
        return 'ERROR';
    }
    let s = '';
    for (let index = 0; index < amount; index++) {
        s += phrase;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
