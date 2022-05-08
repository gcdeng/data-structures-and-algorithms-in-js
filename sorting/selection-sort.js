const selectionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    // 假設目前的index是最小值
    let min = arr[i];
    let minIndex = i;
    // 從index之後的範圍中找出最小值
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    // 把index的值跟minIndex的值交換，把index換成最小值
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};
