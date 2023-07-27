// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const frequentNumber = (arr) => {
  let maxCount = 0;
  let maxFrequent;
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxFrequent = arr[i];
    }
  }
  return maxFrequent;
};

const arr = [3, 5, 2, 5, 3, 1, 3, 4, 5];
console.log(frequentNumber(arr));
