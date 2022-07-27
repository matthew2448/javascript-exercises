const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(element => {
    sum += element;
  });

  return sum;
};

const multiply = function(nums) {
  let sum = 1;
  nums.forEach(element => {
    sum *= element;
  });

  return sum;
};

const power = function(nums) {
  let sum = 1;
	for (let index = 0; index < nums[1]; index++) {
    sum *= nums[0];
  }
  return sum;
};

const factorial = function(num) {
	if(num < 0)
    return 0;
  else if(num == 1 || num == 0){
    return 1;
  }
  else{
    return (num * factorial(num-1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
