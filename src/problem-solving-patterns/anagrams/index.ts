/** Refactored solution */
function valid_anagram(first: string, second: string): boolean {
  if (first.length !== second.length) {
    return false;
  }

  const lookup: Record<string, number> = {};

  for (let i = 0; i < first.length; i++) {
    const char = first[i];

    if (!char) {
      return false;
    }

    if (lookup[char]) {
      lookup[char] += 1;
    } else {
      lookup[char] = 1;
    }
  }

  for (let i = 0; i < second.length; i++) {
    const char = second[i];

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

const test = valid_anagram('anagram', 'nagaram');
const test_2 = valid_anagram('rat', 'car');

console.info({ test });
console.info({ test_2 });
