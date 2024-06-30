// Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

// sample input = [5,6,1,3,4,2]

// function to sort an array from Lowest to the Highest
const bubbleSort = (arr) => {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([4, 2, 6, 1, 7, 4, 8, 3, 9]))
