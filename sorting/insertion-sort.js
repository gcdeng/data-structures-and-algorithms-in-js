const insertionSort = (arr) => {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    let value = arr[i];
    let position = i;
    while (position > 0 && value < arr[position - 1]) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
  }
  return arr;
};
