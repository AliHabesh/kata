const testArray = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];

function countBoomerang(input) {
  let amount = 0;
  for (let i = 0; i < input.length; i++) {
    if ((input[i + 1] > i || input[i + 1] < i) && input[i + 2] === input[i]) {
      amount++;
    }
  }
  return amount;
}

console.log(countBoomerang(testArray));
