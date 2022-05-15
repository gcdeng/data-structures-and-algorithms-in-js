/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return quickSort(nums, 0, nums.length - 1);
};

const quickSort = (arr, left, right) => {
  if (left >= right) return arr; // 遞迴終止條件
  const partitionIndex = partition(arr, left, right); // 比pivot小的移到左區塊，比pivot大的移到右區塊，把pivot放到正確位置，回傳pivot的位置
  quickSort(arr, left, partitionIndex - 1); // 遞迴左區塊
  quickSort(arr, partitionIndex + 1, right); // 遞迴右區塊
  // 遞迴兩個區塊的時間複雜度是log N
  return arr; // 回傳排序好的arr
};

const quickSortByStack = (arr, left, right) => {
  const stack = [];
  stack.push(left);
  stack.push(right);

  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();

    if (start < end) {
      const partitionIndex = partition(arr, start, end);
      stack.push(start);
      stack.push(partitionIndex - 1);
      stack.push(partitionIndex + 1);
      stack.push(end);
    }
  }
  return arr;
};

// 挑選一個pivot，把小於pivot的元素移到pivot左區塊，大於等於pivot的元素在右區塊，回傳pivot該排序到的正確位置index，這邊的時間複雜度是N
const partition = (arr, left, right) => {
  const pivotIndex = left; // 把第一個元素當作pivot
  const pivotValue = arr[pivotIndex];
  let partitionIndex = left + 1; // partitionIndex用來紀錄pivot該排序到的正確位置index
  for (let i = left + 1; i <= right; i++) {
    // 從第二個元素開始把比pivot小的元素跟partitionIndex交換，然後把partitionIndex往後移一位
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  // 結素迴圈就可以找到pivot該排序到的正確位置index就是partitionIndex - 1
  swap(arr, pivotIndex, partitionIndex - 1); // 把pivot放到正確位置
  return partitionIndex - 1; // 回傳pivot該排序到的正確位置index
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
