const testArray = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];

function countBoomerang(input) {
  let resultArray = [];
  for (let i = 0; i < input.length; i++) {
    if ((input[i + 1] > i || input[i + 1] < i) && input[i + 2] === input[i]) {
      resultArray.push([input[i], input[i + 1], input[i + 2]]);
    }
  }
  return resultArray;
}

console.log(countBoomerang(testArray));
