/*
You are given an array. 
Complete the function that returns the 
number of ALL elements within an array, 
including any nested arrays.

Examples:
  []                   -->  0
  [1, 2, 3]            -->  3
  ["x", "y", ["z"]]    -->  4
  [1, 2, [3, 4, [5]]]  -->  7
  The input will always be an array.
*/


// Solution

function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

// or

function deepCount(arr) {
  const stack = [...arr]
  let size = 0

  while (stack.length) {
    const next = stack.pop()
    size += 1

    if (Array.isArray(next)) {
      stack.push(...next)
    }
  }
  return size
}