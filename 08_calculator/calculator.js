const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    total+=current;
    return total;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    total*=current;
    return total;
  }, 1)
};

const power = function(num, pow) {
  return Math.pow(num, pow)
};

const factorial = function(num) {
	fact = 1;
  for (let i=num; i>1; i--) {
    fact*= i;
  }
  return fact;
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
