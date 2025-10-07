import { performance } from 'node:perf_hooks';

/** Naive solution */
function naive_max_sub_array_sum(array: number[], n: number): number | null {
  if (n > array.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let temp = 0;

    for (let j = 0; j < n; j++) {
      temp += array[i + j]!;
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

/** Refactored solution - O(n) */
function max_sub_array_sum(array: number[], n: number): number | null {
  let max_sum = 0;
  let temp_sum = 0;

  if (array.length < n) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    max_sum += array[i]!;
  }

  temp_sum = max_sum;

  for (let i = n; i < array.length; i++) {
    temp_sum = temp_sum - array[i - n]! + array[i]!;
    max_sum = Math.max(max_sum, temp_sum);
  }
  return max_sum;
}

// Example test cases
const test_case_1 = [1, 2, 5, 2, 8, 1, 5];
const test_case_2 = [4, 2, 1, 6];
const test_case_3: number[] = [];

// Naive tests
let t0 = performance.now();
const naive_test_1 = naive_max_sub_array_sum(test_case_1, 2);
let t1 = performance.now();
console.log(`Naive naive_test_1 took ${(t1 - t0).toFixed(4)} ms`);
const naive_test_2 = naive_max_sub_array_sum(test_case_1, 4);
t0 = performance.now();
console.log(`Naive naive_test_2 took ${(t1 - t0).toFixed(4)} ms`);
const naive_test_3 = naive_max_sub_array_sum(test_case_2, 1);
t1 = performance.now();
console.log(`Naive naive_test_3 took ${(t1 - t0).toFixed(4)} ms`);
t0 = performance.now();
const naive_test_4 = naive_max_sub_array_sum(test_case_2, 4);
t1 = performance.now();
console.log(`Naive naive_test_5 took ${(t1 - t0).toFixed(4)} ms`);
const naive_test_5 = naive_max_sub_array_sum(test_case_3, 4);
console.log(`Naive naive_test_5 took ${(t1 - t0).toFixed(4)} ms`);

// Refactored tests
t0 = performance.now();
const refactored_test_1 = max_sub_array_sum(test_case_1, 2);
t1 = performance.now();
console.log(`Refactored refactored_test_1 took ${(t1 - t0).toFixed(4)} ms`);
const refactored_test_2 = max_sub_array_sum(test_case_1, 4);
t0 = performance.now();
console.log(`Refactored refactored_test_2 took ${(t1 - t0).toFixed(4)} ms`);
const refactored_test_3 = max_sub_array_sum(test_case_2, 1);
t1 = performance.now();
console.log(`Refactored refactored_test_3 took ${(t1 - t0).toFixed(4)} ms`);
t0 = performance.now();
const refactored_test_4 = max_sub_array_sum(test_case_2, 4);
t1 = performance.now();
console.log(`Refactored refactored_test_5 took ${(t1 - t0).toFixed(4)} ms`);
const refactored_test_5 = max_sub_array_sum(test_case_3, 4);
console.log(`Refactored refactored_test_5 took ${(t1 - t0).toFixed(4)} ms`);

console.info('Naive results:', {
  naive_test_1,
  naive_test_2,
  naive_test_3,
  naive_test_4,
  naive_test_5,
});
console.info('Refactored results:', {
  refactored_test_1,
  refactored_test_2,
  refactored_test_3,
  refactored_test_4,
  refactored_test_5,
});
