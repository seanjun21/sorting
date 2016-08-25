1) [ 3, 5, 2, 9, 7 ]
2) [ 3, 5, 2, 9, 7 ]
3) [ 3, 5, 2, 9, 7 ]
4) [ 3, 5, 2, 9, 7 ]
5) [ 3, 5, 2, 7, 9 ]
6) [ 2, 5, 3, 7, 9 ]

start ----
array = [3,5,2,9,7]
start = 0
end = 5
middle = partition([3,5,2,9,7], 0, 5)

pivot = 7 // array[end-1] or array[4]
j = 0
for loop (i = 0; i < 4; i++) {
  if (3 <= 7) { // true
    swap([3,5,2,9,7], 0, 0)
    goes to swap function // see #2
    j = 1
  }
  i = 1

  if (5 <= 7) { // true
    swap([3,5,2,9,7], 1, 1)
    goes to swap function // see #3
    j = 2
  }
  i = 2

  if (2 <= 7) { // true
    swap([3,5,2,9,7], 2, 2)
    goes to swap function // see #4
    j = 3
  }
  i = 3

  if (9 <= 7) { // false
    // doesn't run
  }
  i = 4
}

swap([3,5,2,9,7], 4, 3)
goes to swap function // see #5

return j // j = to 3
------ // after partition function first time
middle = 3
array = quickSort([3,5,2,7,9], 0, 3)
-----
// inside second quickSort
array = [3,5,2,7,9]
start = 0
end = 3
middle = partition([3,5,2,7,9], 0, 3)
pivot = 2
j = 0
for (i = 0; i < 2; i++) {
  if (3 <= 2) {
    //doesn't run
  }
  i = 1
  if (5 <= 2) {
    //doesn't run
  }
  i = 2
}
swap([3,5,2,7,9], 2, 0) // see #6
return j // j = 0
middle = 0
array = quickSort([ 2, 5, 3, 7, 9 ], 0, 0)
if (0 >= 0) {
  return array
}
array = quickSort([ 2, 5, 3, 7, 9 ], 1, 5)
middle = partition([ 2, 5, 3, 7, 9 ], 1, 5)
pivot =



array = quickSort([3,5,2,7,9], 4, 5)



i = 9
j = 7

[3, 5, 9, 7, 6, 10, 1, 11, 16, 23]

[1, 5, 9, 7, 6, 10, 3, 11] AND [16, 23]

[1] [5, 9, 7, 6, 10, 3, 11] [16, 23]
