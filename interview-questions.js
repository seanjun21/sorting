'use strict';

// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

// [1, 5, 3, 2, 4]
// We know smallest = 1, highest = 5, which means they can be entered as parameters
// Loop through the array comparing each value w/ either smallest and highest.

function smallHigh(array, smallest, highest) {
  const buckets = new Array(highest * 2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i = 0; i < array.length; i++) {
    if (!buckets[array[i]]) {
      buckets[array[i]] = array[i]; // [, 1, 2, ,4 , ,6 , , , , , , 10]
    } else {
      let j = 1;
      while (true) {
        if (!buckets[array[i] + j]) {
          buckets[array[i] + j] = array[i];
          break;
        }
        j++;
      }
    }
  }
  console.log(buckets, '<---buckets');
  const newArr = buckets.filter((value) => {
    return value;
  });

  return newArr;
}
console.log(smallHigh([1, 10, 2, 1, 5], 1, 10));

// [1, 10, 2]
// min = 1
// max = 10
// bucket = [0] [1] [2]   [10]
//                1   2     10
// for i in bucket:
//  if i then answer.push(i)

// Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

// Create a for loop with i set to incrementing number (starting from 0) and j set to random number generated (use Math.random method).
// Then, swap array[i] with array[j] and return the entire array.

function shuffler(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array;
}

// console.log(shuffler([1, 2, 3, 4, 5]));

// Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?
