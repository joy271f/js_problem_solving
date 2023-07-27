// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanNumeralToInteger = (romanNumeral) => {
  const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let result = 0;

  for(let i = 0; i < romanNumeral.length; i++){
    const curr = romanNumerals[romanNumeral[i]];
    const next = romanNumerals[romanNumeral[i + 1]];

    if (curr < next) {
        result += next - curr;
        i++;
      } else {
        result += curr;
      }
  }
  return result;
};

const romanNumeral = "XXIV";
const result = romanNumeralToInteger(romanNumeral);
console.log(result);
