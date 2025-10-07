/** Naive solution - O(n^2) */
function same_naive(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // indexOf is a nested loop
    const correct_index = arr2.indexOf(arr1[i]! ** 2);

    if (correct_index === -1) {
      return false;
    }
    arr2.splice(correct_index, 1);
  }

  return true;
}

const naive_test_1 = same_naive([1, 2, 3, 2], [9, 1, 4, 4]);

console.info({ naive_test_1 });

/** Refactored solution - O(3n) */
function same_refactored(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequency_counter_1: Record<number, number> = {};
  const frequency_counter_2: Record<number, number> = {};

  for (const value of arr1) {
    frequency_counter_1[value] = (frequency_counter_1[value] || 0) + 1;
  }

  for (const value of arr2) {
    frequency_counter_2[value] = (frequency_counter_2[value] || 0) + 1;
  }

  for (const key in frequency_counter_1) {
    const numeric_key = Number(key);
    if (!(numeric_key ** 2 in frequency_counter_2)) {
      return false;
    }

    if (frequency_counter_2[numeric_key ** 2] !== frequency_counter_1[key]) {
      return false;
    }
  }

  return true;
}

const refactored_test = same_refactored([1, 2, 3, 2], [9, 1, 4, 4]);
console.info({ refactored_test });
