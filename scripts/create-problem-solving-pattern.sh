dir_name=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

mkdir -p src/problem-solving-patterns/$dir_name

touch src/problem-solving-patterns/$dir_name/{index.ts,$dir_name.md}

echo "/** Naive solution */\n\n/** Refactored solution */" > src/problem-solving-patterns/$dir_name/index.ts

echo "# $1" > src/problem-solving-patterns/$dir_name/$dir_name.md