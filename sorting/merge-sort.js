const mergeSort = (arr) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // console.log("left:", left);
  // console.log("right:", right);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);
