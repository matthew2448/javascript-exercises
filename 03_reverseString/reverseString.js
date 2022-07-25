const reverseString = function(word) {
    //if (word.empty()) return '';

    let splitWord = word.split('');
    splitWord = splitWord.reverse();
    let newWord = splitWord.join('');

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
