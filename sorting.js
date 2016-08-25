/**
 * BUBBLE SORT
 */

function swap(array, i, j) { // swaps the values at two indices in an array.
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) { // looks through adjacent pairs in the array.
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    // If the values are in the wrong order then it swaps them around
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++; // increases the swaps counter.
    }
  }

  if (swaps > 0) {
    return bubbleSort(array); // call bubbleSort again to keep sorting.
  }
  // you have a sorted array which you can return.
  return array;
}

// The best case: the nodes are already in order,
// so it simply needs to check each pair once; an O(n) operation.
// The worst case: each value needs swapping with each other value, O(n^2).
// The average case: same as the worst case, which is also O(n^2).


/**
 * MERGE SORT
 */

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  // console.log(left, '<---left');
  // console.log(right, '<---right');
  // console.log(array, '<---array');

  return array;
}

function mergeSort(array) {
  if (array.length <= 1) { // Base case: it is by definition sorted
    return array;
  }

  // you slice the array into two halves
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  // sort each half by recursively calling mergeSort
  left = mergeSort(left);
  right = mergeSort(right);

  // The two sorted halves are the merged together in the correct order using the merge function:
  return merge(left, right, array);
}

// console.log(mergeSort([ 3, 5, 2, 9, 7 ]));

// Merge sort has a best, average, and worst case performances of O(nlog(n)).
// This is provably the lower limit for a sorting algorithm,
// and is significantly better than bubble sort's O(n^2).


/**
 * QUICK SORT
 */

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

console.log(quickSort([3, 5, 2, 9, 7]));
