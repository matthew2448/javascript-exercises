const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ")
         .replace(/\s/g, "");
         console.log(word)
    let i = 0; let j = word.length-1;
    while(i <= j){
        if(word.charAt(i) != word.charAt(j)){ return false;}
        i++; j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
