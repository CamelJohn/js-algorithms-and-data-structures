/** Naive solution - linear search O(n) */
function naive_divide_and_conquer(array: number[], num: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}

/** Refactored solution - binary search O(nLog(n)) */
function divide_and_conquer(array: number[], num: number): number {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let current_element = array[middle];

    if (current_element! < num) {
      min = middle + 1;
    } else if (current_element! > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// Example test cases
const test_case = [1, 2, 3, 4, 5, 6];

// Naive tests
const naive_test_1 = naive_divide_and_conquer(test_case, 4);
const naive_test_2 = naive_divide_and_conquer(test_case, 6);
const naive_test_3 = naive_divide_and_conquer(test_case, 11);

// Refactored tests
const refactored_test_1 = divide_and_conquer(test_case, 4);
const refactored_test_2 = divide_and_conquer(test_case, 6);
const refactored_test_3 = divide_and_conquer(test_case, 11);

console.info('Naive results:', { naive_test_1, naive_test_2, naive_test_3 });
console.info('Refactored results:', { refactored_test_1, refactored_test_2, refactored_test_3 });
