/** Naive solution */
function naive_count_unique_values(array: number[]): number {
  const sorted_array = [...array];
  if (!sorted_array.length) {
    return 0;
  }

  let unique_values = 0;

  for (let j = 1; j < sorted_array.length; j++) {
    const current = sorted_array[j];
    const lastUnique = sorted_array[unique_values];

    if (current === undefined || lastUnique === undefined) continue;

    if (current !== lastUnique) {
      unique_values++;
      sorted_array[unique_values] = current;
    }
  }

  return unique_values + 1;
}

/** Refactored solution */
function count_unique_values(array: number[]) {
  const sorted_array = [...array];
  if (!sorted_array.length) {
    return 0;
  }

  let unique_values = 0;

  for (let j = 1; j < sorted_array.length; j++) {
    const current = sorted_array[j];
    const lastUnique = sorted_array[unique_values];

    if (current === undefined || lastUnique === undefined) continue;

    if (current !== lastUnique) {
      unique_values++;
      sorted_array[unique_values] = current;
    }
  }

  return unique_values + 1;
}

// Example test cases
const test_case_1 = [1, 1, 1, 1, 1, 2];
const test_case_2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const test_case_3: number[] = [];
const test_case_4 = [-2, -1, -1, 0, 1];

// Naive tests
const naive_test_1 = naive_count_unique_values(test_case_1);
const naive_test_2 = naive_count_unique_values(test_case_2);
const naive_test_3 = naive_count_unique_values(test_case_3);
const naive_test_4 = naive_count_unique_values(test_case_4);

// Refactored tests
const refactored_test_1 = count_unique_values(test_case_1);
const refactored_test_2 = count_unique_values(test_case_2);
const refactored_test_3 = count_unique_values(test_case_3);
const refactored_test_4 = count_unique_values(test_case_4);

console.info('Naive results:', { naive_test_1, naive_test_2, naive_test_3, naive_test_4 });
console.info('Refactored results:', {
  refactored_test_1,
  refactored_test_2,
  refactored_test_3,
  refactored_test_4,
});
