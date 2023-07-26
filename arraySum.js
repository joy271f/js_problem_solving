// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const arrSum = (arr) => {
  let sumValue = 0;
  let arrValue = [];
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > 0) {
      arrValue.push(element);
      const sumNumber = arrValue.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      sumValue = sumNumber;
    }
  }
  return sumValue;
};

const arr = [2, -5, 10, -3, 7];
console.log(arrSum(arr));
