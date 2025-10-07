function same_frequency(num1: number, num2: number) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const lookup: Record<string, number> = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    if (!char) {
      return false;
    }

    if (lookup[char]) {
      lookup[char] += 1;
    } else {
      lookup[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!char) {
      return false;
    }

    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

const test_cases: [number, number][] = [
  [182, 281],
  [34, 14],
  [3589578, 5879385],
  [22, 222],
];

const [test1, test2, test3, test4] = test_cases.map(([n1, n2]) => same_frequency(n1, n2));

console.log({
  test1,
  test2,
  test3,
  test4,
});
