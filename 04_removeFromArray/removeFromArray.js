const removeFromArray = function(nums, ...args) {
    //[1, 2, 3, 4], 3)
    let arr = nums;
    for(var i = 0; i < args.length; i++){
        let index = args[i];
        for( var j = 0; j < arr.length; j++){
            
            if(arr[j] === index){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
