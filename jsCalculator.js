const calculator = (num1, num2, operator) => {
  let result = 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num1 === 0 || num2 === 0) {
      return "Zero does not divided any number";
    } else {
      result = num1 / num2;
    }
  }

  return result;
};

const result = calculator(4, 4, "/");
console.log(result);
