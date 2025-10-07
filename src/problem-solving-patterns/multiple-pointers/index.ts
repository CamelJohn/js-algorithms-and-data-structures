/** Naive solution O(n^2) */
function naive_sum_zero(sorted_array: number[]): [number, number] | undefined {
  for (let i = 0; i < sorted_array.length; i++) {
    const first = sorted_array[i];

    if (first === undefined) continue;

    for (let j = i + 1; j < sorted_array.length; j++) {
      const second = sorted_array[j];
      if (second === undefined) continue;

      if (first + second === 0) {
        return [first, second];
      }
    }
  }
}

const naive_test_1 = naive_sum_zero([-3, -2, 1, 0, 1, 2, 3]);
const naive_test_2 = naive_sum_zero([-2, 1, 0, 3]);
const naive_test_3 = naive_sum_zero([1, 2, 3]);

console.log({ naive_test_1, naive_test_2, naive_test_3 });

/** Refactored solution - O(n) */
function refactored_sum_zero(sorted_array: number[]): [number, number] | undefined {
  let left_pointer = 0;
  let right_pointer = sorted_array.length - 1;

  while (left_pointer < right_pointer) {
    const left = sorted_array[left_pointer];
    const right = sorted_array[right_pointer];

    if (left === undefined || right === undefined) break;

    let sum = left + right;

    if (sum === 0) {
      return [left, right];
    } else if (sum > 0) {
      right_pointer--;
    } else {
      left_pointer++;
    }
  }
}

const refactored_test_1 = refactored_sum_zero([-4, -3, -2, 1, 0, 1, 2, 3, 10]);
const refactored_test_2 = refactored_sum_zero([-2, 1, 0, 3]);
const refactored_test_3 = refactored_sum_zero([1, 2, 3]);

console.log({ refactored_test_1, refactored_test_2, refactored_test_3 });
