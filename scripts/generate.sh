parent_dir_name="$npm_lifecycle_event"
dir_name=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
func_name=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')

mkdir -p src/$parent_dir_name/$dir_name

touch src/$parent_dir_name/$dir_name/{index.ts,$dir_name.md}

cat <<EOF > src/$parent_dir_name/$dir_name/index.ts
/** Naive solution */
function naive_${func_name}(input: any) {
  // TODO: implement naive solution
  return input;
}

/** Refactored solution */
function ${func_name}(input: any) {
  // TODO: implement optimized solution
  return input;
}

// Example test cases
const test_case_1 = "test_case_1_input";
const test_case_2 = "test_case_2_input";
const test_case_3 = "test_case_3_input";

// Naive tests
const naive_test_1 = naive_${func_name}(test_case_1);
const naive_test_2 = naive_${func_name}(test_case_2);
const naive_test_3 = naive_${func_name}(test_case_3);

// Refactored tests
const refactored_test_1 = ${func_name}(test_case_1);
const refactored_test_2 = ${func_name}(test_case_2);
const refactored_test_3 = ${func_name}(test_case_3);

console.info("Naive results:", { naive_test_1, naive_test_2, naive_test_3 });
console.info("Refactored results:", { refactored_test_1, refactored_test_2, refactored_test_3 });
EOF


cat <<EOF > src/$parent_dir_name/$dir_name/$dir_name.md
# $1

# Exercise

write a function called \`$func_name\`

\`\`\`typescript

\`\`\`
EOF