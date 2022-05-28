/**
 * @param {number[]} arr
 * @return {number[]}
 */
const heapSort = (arr) => {
  let heapSize = arr.length;
  // build max heap, 對全部擁有children的node進行heapify，從最後一個node的parent開始往前heapify，O(n log(n))
  for (let i = getParentIndex(heapSize - 1); i >= 0; i--) {
    maxHeapify(arr, i, heapSize);
  }
  // heap sort, O(n log(n))
  for (let i = heapSize - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]]; // swap root node and last node，把最大值排到最後
    heapSize--; // 縮小heapSize等於間接的把最大值從heap中移除，discard sorted part of the list
    maxHeapify(arr, 0, heapSize); // heapify root node，以防新的root違反max heap規則
  }
  return arr;
};

const getLeftChildIndex = (i) => 2 * i + 1;
const getRightChildIndex = (i) => 2 * i + 2;
const getParentIndex = (i) => Math.floor(i / 2);

/**
 * O(log(n))
 * @param {number[]} arr  待排序數組
 * @param {number} i  parent node's index
 */
const maxHeapify = (arr, i, heapSize) => {
  const left = getLeftChildIndex(i); // left child's index
  const right = getRightChildIndex(i); // right child's index
  let largest = i; // largest's index
  // 找最大值的index
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  // 如果最大值不是parent node，就交換位置
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, largest, heapSize); // 繼續heapify子節點
  }
};
